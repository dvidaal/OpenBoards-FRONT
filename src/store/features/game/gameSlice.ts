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
    createdBy: "",
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

    deleteGameById: (
      currentGameState,
      action: PayloadAction<string>
    ): GamesData => {
      const newListGames = currentGameState.games.filter(
        (game) => game.id !== action.payload
      );

      return {
        games: newListGames,
        singleGame: {
          game: "",
          avatar: "",
          date: "",
          hour: "",
          bio: "",
          plazasLibres: 2,
          id: "",
          createdBy: "",
        },
      };
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  loadOneGame: loadOneGameActionCreator,
  deleteGameById: deleteGameByIdActionCreator,
} = gameSlice.actions;
