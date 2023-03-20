import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesData, GamesStructure, GameStructure } from "../../../types/types";

const initialGameState: GamesData = {
  games: [],
  singleGame: {
    game: "",
    avatar: "",
    data: "",
    hour: "",
    bio: "",
    plazasLibres: 2,
    id: "",
    createdBy: "",
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    loadGames: (
      currentGameState: GamesData,
      action: PayloadAction<GamesStructure>
    ): GamesData => ({
      ...currentGameState,
      games: [...action.payload],
    }),

    loadOneGame: (
      currentGameState: GamesData,
      action: PayloadAction<GameStructure>
    ): GamesData => ({
      ...currentGameState,
      singleGame: { ...action.payload },
    }),

    deleteGameById: (
      currentGameState: GamesData,
      action: PayloadAction<string>
    ): GamesData => ({
      ...currentGameState,
      games: currentGameState.games.filter(
        (game) => game.id !== action.payload
      ),
    }),
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  loadOneGame: loadOneGameActionCreator,
  deleteGameById: deleteGameByIdActionCreator,
} = gameSlice.actions;
