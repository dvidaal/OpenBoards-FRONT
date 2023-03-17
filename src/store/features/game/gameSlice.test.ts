import { GamesStructure, GamesData, GameStructure } from "../../../types/types";
import {
  gameReducer,
  loadGamesActionCreator,
  loadOneGameActionCreator,
} from "./gameSlice";

const initialState: GamesData = {
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

const mockGame: GamesStructure = [
  {
    game: "Némesis",
    avatar: "asdfghjkl",
    date: "dadas",
    hour: "sfasfa",
    bio: "sdfasdfas",
    plazasLibres: 3,
    id: "",
    createdBy: "",
  },
];

const expectedFinalState: GamesData = {
  games: [
    {
      game: "Némesis",
      avatar: "asdfghjkl",
      date: "dadas",
      hour: "sfasfa",
      bio: "sdfasdfas",
      plazasLibres: 3,
      id: "",
      createdBy: "",
    },
  ],
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
describe("Given gameReducer reducer", () => {
  describe("When it receives a loadGames action", () => {
    test("Then it should response with one game", () => {
      const loadGamesAction = loadGamesActionCreator(mockGame);

      const newGames = gameReducer(initialState, loadGamesAction);

      expect(newGames).toStrictEqual(expectedFinalState);
    });
  });

  describe("When it receives a loadOneGame action", () => {
    test("Then it should with a single game", () => {
      const mockSingleGame: GameStructure = {
        avatar: "",
        bio: "",
        date: "",
        game: "",
        hour: "",
        id: "",
        plazasLibres: 2,
        createdBy: "",
      };
      const loadOneGameAction = loadOneGameActionCreator(mockSingleGame);

      const newGame = gameReducer(initialState, loadOneGameAction);

      expect(newGame.singleGame).toEqual(expectedFinalState.singleGame);
    });
  });
});
