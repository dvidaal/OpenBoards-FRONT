import { GamesStructure, GamesData } from "../../../types/types";
import { gameReducer, loadGamesActionCreator } from "./gameSlice";

describe("Given gameReducer reducer", () => {
  describe("When it receives a loadGames action", () => {
    test("Then it should response with one game", () => {
      const initialState: GamesData = {
        games: [],
      };

      const mockGame: GamesStructure = [
        {
          game: "Némesis",
          avatar: "asdfghjkl",
          date: "dadas",
          hour: "sfasfa",
          bio: "sdfasdfas",
          plazasLibres: 3,
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
          },
        ],
      };

      const loadGamesAction = loadGamesActionCreator(mockGame);

      const newGames = gameReducer(initialState, loadGamesAction);

      expect(newGames).toStrictEqual(expectedFinalState);
    });
  });
});
