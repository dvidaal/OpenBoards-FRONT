import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { User } from "../../store/features/user/types";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import {
  setLoaderActionCreator,
  showModalActionCreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";

export interface UserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UserStructure => {
  const dispatch = useAppDispatch();

  const apirUrl = process.env.REACT_APP_URL_API;
  const appEndpoint = "/users";
  const loginEndpoint = "/login";

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
        })
      );
    }
  };

  return { loginUser };
};

export default useUser;
