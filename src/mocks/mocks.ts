import { GamesData, GameStructure } from "../types/types";

export const mockFirstGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  date: "sdfsdfs",
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
};

export const mockSecondGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  date: "sdfsdf",
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
};

export const mockGames: GamesData = {
  games: [mockSecondGame, mockFirstGame],
};
