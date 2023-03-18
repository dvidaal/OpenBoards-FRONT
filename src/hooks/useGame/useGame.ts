import { useCallback } from "react";
import {
  deleteGameByIdActionCreator,
  loadGamesActionCreator,
  loadOneGameActionCreator,
} from "../../store/features/game/gameSlice";
import {
  setLoaderActionCreator,
  showModalActionCreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { GamesData } from "../../types/types";

export const useGame = () => {
  const dispatch = useAppDispatch();

  const apirUrl = process.env.REACT_APP_URL_API;
  const appEndpoint = "/openboards";
  const gameEndpoint = "/";
  const deleteEndpoint = "/delete";

  const getGame = useCallback(async () => {
    try {
      dispatch(setLoaderActionCreator());
      const response = await fetch(`${apirUrl}${appEndpoint}${gameEndpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Imposible mostrar los juegos");
      }
      const { games } = (await response.json()) as GamesData;

      dispatch(loadGamesActionCreator(games));
      dispatch(unsetLoaderActionCreator());
    } catch (error) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modal: (error as Error).message,
          isLoading: false,
        })
      );
      return (error as Error).message;
    }
  }, [apirUrl, dispatch]);

  const getGameById = useCallback(
    async (id: string) => {
      dispatch(setLoaderActionCreator());
      try {
        const response = await fetch(`${apirUrl}${appEndpoint}/${id}`, {
          method: "GET",
          headers: { "Contaner-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Imposible mostrar el juego que estas buscando");
        }
        const { singleGame: game } = (await response.json()) as GamesData;
        dispatch(loadOneGameActionCreator(game));
        dispatch(unsetLoaderActionCreator());
      } catch (error) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modal: (error as Error).message,
            isLoading: false,
          })
        );
        return (error as Error).message;
      }
    },
    [apirUrl, dispatch]
  );

  const deleteGameById = useCallback(
    async (id: string) => {
      dispatch(setLoaderActionCreator());

      try {
        const response = await fetch(
          `${apirUrl}${appEndpoint}${deleteEndpoint}/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("No se ha podido eliminar la partida");
        }

        dispatch(deleteGameByIdActionCreator(id));
        dispatch(unsetLoaderActionCreator());
      } catch (error) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modal: (error as Error).message,
            isLoading: false,
          })
        );

        return (error as Error).message;
      }
    },
    [apirUrl, dispatch]
  );

  return { getGame, getGameById, deleteGameById };
};

export default useGame;
