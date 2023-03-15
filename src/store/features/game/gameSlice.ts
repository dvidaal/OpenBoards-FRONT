import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesData, GamesStructure, GameStructure } from "../../../types/types";

const initialGameState: GamesData = {
  games: [],
  singleGame: {
    game: "",
    avatar: "",
    date: "",
    hour: "",
    bio: "",
    plazasLibres: 2,
    id: "",
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    loadGames: (
      currentGameState,
      action: PayloadAction<GamesStructure>
    ): GamesData => ({
      ...currentGameState,
      games: [...action.payload],
    }),

    loadOneGame: (
      currentGameState,
      action: PayloadAction<GameStructure>
    ): GamesData => ({
      ...currentGameState,
      singleGame: { ...action.payload },
    }),
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  loadOneGame: loadOneGameActionCreator,
} = gameSlice.actions;
