import { renderHook } from "@testing-library/react";
import { mockGames } from "../../mocks/mocks";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadGamesActionCreator } from "../../store/features/game/gameSlice";
import useGame from "./useGame";

const spyDispatch = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given a useGame custom hook", () => {
  describe("When the getGame function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getGame },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const action = loadGamesActionCreator(mockGames.games);
      await getGame();

      expect(spyDispatch).toHaveBeenCalledWith(action);
    });
  });
});
