import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockFirstGame, mockGames } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import {
  deleteGameByIdActionCreator,
  loadGamesActionCreator,
  loadOneGameActionCreator,
} from "../../store/features/game/gameSlice";
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

  describe("When the getGame function is called and the response from the request is failed", () => {
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
        isLoading: false,
        isSucces: false,
      };

      await getGame();

      expect(spyDispatch).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });

  describe("When the getGameById is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getGameById },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const action = loadOneGameActionCreator(mockGames.singleGame);

      await getGameById(mockGames.singleGame.id);

      expect(spyDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When the getGameById function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the dispatch with show modal action", async () => {
      const {
        result: {
          current: { getGameById },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        modal: "Imposible mostrar el juego que estas buscando",
        isLoading: false,
        isSucces: false,
      };

      await getGameById("1234567");

      expect(spyDispatch).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });

  describe("When the deleteGameById is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteGameById },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const deleteAction = deleteGameByIdActionCreator(mockFirstGame.id);

      await deleteGameById(mockFirstGame.id);

      expect(spyDispatch).toHaveBeenNthCalledWith(2, deleteAction);
    });
  });

  describe("When the deleteGameById function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with show modal action", async () => {
      const {
        result: {
          current: { deleteGameById },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        modal: "No se ha podido eliminar la partida",
        isLoading: false,
        isSucces: false,
      };

      await deleteGameById("1234567");

      expect(spyDispatch).toHaveBeenCalledWith(showModalActionCreator(modal));
    });
  });

  describe("When the createGame function it is called", () => {
    test("Then it should call the dispatch method and create the game", async () => {
      const {
        result: {
          current: { createGame },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      await createGame(mockFirstGame);

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When the createGame function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the showFeedbackUser to show an error modal with the text 'No se ha podido eliminar la partida'", async () => {
      const {
        result: {
          current: { createGame },
        },
      } = renderHook(() => useGame(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        modal: "No se ha podido eliminar la partida",
        isLoading: false,
        isSucces: false,
      };

      await createGame(mockFirstGame);

      expect(spyDispatch).not.toHaveBeenCalledWith(modal);
    });
  });
});
