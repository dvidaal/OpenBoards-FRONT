import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { showModalActionCreator } from "../../store/features/ui/uiSlice";
import { User } from "../../store/features/user/types";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import ModalPayload from "../../types/types";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";

jest.mock("jwt-decode", () => jest.fn());

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
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });
});
