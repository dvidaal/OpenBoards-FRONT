import { mockFirstGame, mockSecondGame } from "../../../mocks/mocks";
import { GamesStructure, GamesData, GameStructure } from "../../../types/types";
import {
  deleteGameByIdActionCreator,
  gameReducer,
  loadGamesActionCreator,
  loadOneGameActionCreator,
} from "./gameSlice";

const initialState: GamesData = {
  games: [],
  singleGame: {
    game: "Némesis",
    avatar: "asdfghjkl",
    date: "sdfsdf",
    hour: "sfasfa",
    bio: "sdfasdfas",
    plazasLibres: 3,
    id: "1234567",
    createdBy: "fake",
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
    game: "Némesis",
    avatar: "asdfghjkl",
    date: "sdfsdf",
    hour: "sfasfa",
    bio: "sdfasdfas",
    plazasLibres: 3,
    id: "1234567",
    createdBy: "fake",
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
    test("Then it should return with a single game", () => {
      const mockSingleGame: GameStructure = {
        game: "Némesis",
        avatar: "asdfghjkl",
        date: "sdfsdf",
        hour: "sfasfa",
        bio: "sdfasdfas",
        plazasLibres: 3,
        id: "1234567",
        createdBy: "fake",
      };
      const loadOneGameAction = loadOneGameActionCreator(mockSingleGame);

      const newGame = gameReducer(initialState, loadOneGameAction);

      expect(newGame.singleGame).toEqual(expectedFinalState.singleGame);
    });
  });

  describe("When it receives a deleteGameById action", () => {
    test("Then it should delete one game by id", async () => {
      const initialListGames: GamesData = {
        games: [mockFirstGame, mockSecondGame],
        singleGame: mockFirstGame,
      };

      const deleteGame = deleteGameByIdActionCreator(mockFirstGame.id);

      const result = gameReducer(initialListGames, deleteGame);
      const newList = {
        games: [mockSecondGame],
        singleGame: mockFirstGame,
      };

      expect(newList).toStrictEqual(result);
    });
  });
});
