import { GamesData, GameStructure } from "../types/types";

export const mockFirstGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  date: "sdfsdf",
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
  id: "1234567",
  createdBy: "fake",
};

export const mockSecondGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  date: "sdfsdf",
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
  id: "1237",
  createdBy: "fake",
};

export const mockGames: GamesData = {
  games: [mockSecondGame, mockFirstGame],
  singleGame: mockFirstGame,
};
