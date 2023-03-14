import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockGames } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadGamesActionCreator } from "../../store/features/game/gameSlice";
import { showModalActionCreator } from "../../store/features/ui/uiSlice";
import ModalPayload from "../../types/types";
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

  describe("When the getEvents function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getGame },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        modal: "Imposible mostrar los juegos",
      };

      await getGame();

      expect(spyDispatch).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });
});
