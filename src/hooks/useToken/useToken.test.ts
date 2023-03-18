import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../mocks/Wrapper";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import useToken from "./useToken";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  username: "lDidi",
  id: "",
};

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then it should call the dispatch", () => {
      const mockToken = "someToken";
      localStorage.setItem("token", mockToken);

      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      getToken();

      expect(dispatchMock).toHaveBeenCalled();
      localStorage.clear();
    });
  });

  describe("When the saveToken function is called without a token", () => {
    test("Then the dispatch should not be called", () => {
      const mockDispatch = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });
      getToken();

      expect(mockDispatch).not.toHaveBeenCalled();
      localStorage.clear();
    });

    test("Then it should remove the token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });
});
