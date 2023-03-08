import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { User } from "../../store/userSlice/types";
import { loginUserActionCreator } from "../../store/userSlice/userSlice";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";

export interface userStructure {
  loginUser: (userCredentials: UserCredentials) => void;
}

export const useUser = (): userStructure => {
  const dispatch = useAppDispatch();

  const apirUrl = process.env.REACT_APP_URL_API;
  const appEndpoint = "/openboards";
  const loginEndpoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(`${apirUrl}${appEndpoint}${loginEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username } = tokenPayload;

      const userLogin: User = { username, token };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch (error) {}
  };

  return { loginUser };
};
