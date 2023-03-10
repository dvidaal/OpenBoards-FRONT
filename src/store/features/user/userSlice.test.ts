import { UserState } from "./types";
import { initialState, loginUserActionCreator, userReducer } from "./userSlice";

describe("Given userReducer reducer", () => {
  describe("When it receives a user with an action to log in", () => {
    test("Then it should response with the property isLogged set to true and with a token", () => {
      const initialUser: UserState = {
        isLogged: false,
        username: "",
        token: "",
      };

      const loggedUserStatus: UserState = {
        isLogged: true,
        username: initialUser.username,
        token: initialUser.token,
      };

      const loginUser = loginUserActionCreator(initialUser);
      const expectedUserState = userReducer(initialState, loginUser);

      expect(expectedUserState).toStrictEqual(loggedUserStatus);
    });
  });
});
