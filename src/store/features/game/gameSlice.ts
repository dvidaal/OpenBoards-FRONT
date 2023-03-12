import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesStructure } from "../../../types/types";

const initialGameState: GamesStructure = [];

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    loadGames: (currentGameState, action: PayloadAction<GamesStructure>) => [
      ...action.payload,
    ],
  },
});

export const gameReducer = gameSlice.reducer;
export const { loadGames: loadGamesActionCreator } = gameSlice.actions;
