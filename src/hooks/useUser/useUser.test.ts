import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { showModalActionCreator } from "../../store/features/ui/uiSlice";
import { User } from "../../store/features/user/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import ModalPayload from "../../types/types";
import {
  CustomTokenPayload,
  RegisterCredentials,
  UserCredentials,
} from "./types";
import useUser from "./useUser";

jest.mock("jwt-decode", () => jest.fn());

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const userCredentials: UserCredentials = {
  username: "lDidi",
  password: "12345678",
};

const mockTokenPayload: CustomTokenPayload = {
  username: "lDidi",
  id: "64062ae6a801af8faeaee9ab",
};

const registerUserCredentials: RegisterCredentials = {
  username: "testuser",
  email: "test@user.com",
  password: "testuser123",
};

const mockToken = "someToken";

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch with a log in action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockLogin: User = {
        username: mockTokenPayload.username,
        token: mockToken,
        id: mockTokenPayload.id,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLogin));
    });
  });

  describe("When the loginUser function is called and the request login action fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Usuario o contraseña incorrectos'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        modal: "Usuario o contraseña incorrectos",
        isError: true,
        isLoading: false,
        isSucces: false,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });

  describe("When the logoutUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await logoutUser();

      expect(spy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When a user tries to register", () => {
    test("Then it should response with a 201 status code", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(registerUserCredentials);

      expect(spy).toHaveBeenCalledWith(
        showModalActionCreator({
          isError: false,
          isLoading: false,
          isSucces: true,
          modal: "Usuario correctamente creado.",
        })
      );
    });
  });

  describe("When the response is not OK", () => {
    beforeAll(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should response with a 404 status code", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        modal: "No se ha podido crear el usuario.",
        isError: true,
        isLoading: false,
        isSucces: false,
      };

      await registerUser({
        email: "",
        password: "",
        username: "",
      });

      expect(spy).toHaveBeenLastCalledWith(showModalActionCreator(modal));
    });
  });
});
