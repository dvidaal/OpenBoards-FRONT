import { GameStructure, GamesStructure } from "../../../types/types";
import { gameReducer, loadGamesActionCreator } from "./gameSlice";

describe("Given gameReducer reducer", () => {
  describe("When it receives a loadGames action", () => {
    test("Then it should response with one game", () => {
      const mockGame: GameStructure[] = [
        {
          game: "Némesis",
          avatar: "asdfghjkl",
          date: new Date(),
          hour: "sfasfa",
          bio: "sdfasdfas",
          plazasLibres: 3,
        },
      ];

      const games: GamesStructure = mockGame;

      const gameLoaded: GamesStructure = games;

      const loadGamesAction = loadGamesActionCreator(games);

      const newGames = gameReducer([], loadGamesAction);

      expect(newGames).toStrictEqual(gameLoaded);
    });
  });
});
