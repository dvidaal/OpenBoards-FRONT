import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { User } from "../../store/userSlice/types";
import { loginUserActionCreator } from "../../store/userSlice/userSlice";
import { CustomTokenPayload, UserCredentials } from "./types";
import { useUser } from "./useUser";

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
};

const mockToken = "someToken";

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch", async () => {
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
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLogin));
    });
  });
});
