import { CreateGameStructure, GamesData, GameStructure } from "../types/types";

export const mockFirstGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  data: "sdfsdf",
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
  id: "1234567",
  createdBy: "64062ae6a801af8faeaee9ab",
};

export const mockSecondGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  data: "sdfsdf",
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

export const mockGameCreate: CreateGameStructure = {
  game: "Monopoly",
  avatar: "asdfghjk.jpeg",
  data: "Viernes 19 de enero",
  plazasLibres: 0,
  bio: "Ven a jugar",
  createdBy: "",
};

export const mockGameCreateForm = {
  game: "Monopoly",
  avatar: "asdfghjk.jpeg",
  data: "1111-11-11",
  plazasLibres: "1",
  bio: "Ven a jugar",
  createdBy: "64062ae6a801af8faeaee9ab",
};
