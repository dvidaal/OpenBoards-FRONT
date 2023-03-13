import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesData, GamesStructure } from "../../../types/types";

const initialGameState: GamesData = { games: [] };

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    loadGames: (currentGameState, action: PayloadAction<GamesStructure>) => ({
      ...currentGameState,
      games: [...action.payload],
    }),
  },
});

export const gameReducer = gameSlice.reducer;
export const { loadGames: loadGamesActionCreator } = gameSlice.actions;
