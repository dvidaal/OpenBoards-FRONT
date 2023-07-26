import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { User } from "../../store/features/user/types";
import {
  CustomTokenPayload,
  LoginResponse,
  RegisterCredentials,
  UserCredentials,
} from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import {
  setLoaderActionCreator,
  showModalActionCreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import useToken from "../useToken/useToken";
import { useNavigate } from "react-router-dom";

export interface UserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
  registerUser: (registerCredentials: RegisterCredentials) => Promise<void>;
}

const useUser = (): UserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const navigateTo = useNavigate();

  const apirUrl = process.env.REACT_APP_URL_API!;
  const appEndpoint = "/users";
  const loginEndpoint = "/login";
  const registerEndpoint = "/register";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setLoaderActionCreator());

      const response = await fetch(`${apirUrl}${appEndpoint}${loginEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      dispatch(unsetLoaderActionCreator());
      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username, id } = tokenPayload;

      const userLogin: User = { username, token, id };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch {
      dispatch(
        showModalActionCreator({
          modal: "Usuario o contraseña incorrectos",
          isError: true,
          isLoading: false,
          isSucces: false,
        })
      );
    }
  };

  const logoutUser = () => {
    navigateTo("/login");
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  const registerUser = async (registerCredentials: RegisterCredentials) => {
    try {
      dispatch(setLoaderActionCreator());

      const response = await fetch(
        `${apirUrl}${appEndpoint}${registerEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(registerCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch(unsetLoaderActionCreator());

      if (!response.ok) {
        throw new Error("No ha sido posible registrarse. Reivsa los campos.");
      }

      dispatch(
        showModalActionCreator({
          modal: "Usuario correctamente creado.",
          isError: false,
          isLoading: false,
          isSucces: true,
        })
      );
      navigateTo("/login");
    } catch {
      dispatch(
        showModalActionCreator({
          modal: "No se ha podido crear el usuario.",
          isError: true,
          isLoading: false,
          isSucces: false,
        })
      );
    }
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
