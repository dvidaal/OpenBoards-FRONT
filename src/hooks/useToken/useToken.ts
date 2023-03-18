import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, id } = decodeToken<CustomTokenPayload>(token);

      dispatch(
        loginUserActionCreator({
          username,
          token,
          id,
        })
      );
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
