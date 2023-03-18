import { UserState } from "./types";
import {
  initialState,
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given userReducer reducer", () => {
  describe("When it receives a user with an action to log in", () => {
    test("Then it should response with the property isLogged set to true and with a token", () => {
      const initialUser: UserState = {
        isLogged: false,
        username: "",
        token: "",
        id: "",
      };

      const loggedUserStatus: UserState = {
        isLogged: true,
        username: initialUser.username,
        token: initialUser.token,
        id: "",
      };

      const loginUser = loginUserActionCreator(initialUser);
      const expectedUserState = userReducer(initialState, loginUser);

      expect(expectedUserState).toStrictEqual(loggedUserStatus);
    });
  });

  describe("When it receives a new state and the action to log out the user", () => {
    test("Then it should return the user with isLogged property set to false", () => {
      const logourUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logourUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
