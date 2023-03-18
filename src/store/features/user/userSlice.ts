import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

export const initialState: UserState = {
  isLogged: false,
  username: "",
  token: "",
  id: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      username: action.payload.username,
      token: action.payload.token,
      isLogged: true,
      id: action.payload.id,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
