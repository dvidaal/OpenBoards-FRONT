import { useCallback } from "react";
import { loadGamesActionCreator } from "../../store/features/game/gameSlice";
import { showModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { GamesData } from "../../types/types";

export const useGame = () => {
  const dispatch = useAppDispatch();

  const apirUrl = process.env.REACT_APP_URL_API;
  const appEndpoint = "/openboards";
  const gameEndpoint = "/games";

  const getGame = useCallback(async () => {
    try {
      const response = await fetch(`${apirUrl}${appEndpoint}${gameEndpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Imposible mostrar los juegos");
      }
      const { games } = (await response.json()) as GamesData;

      dispatch(loadGamesActionCreator(games));
    } catch (error) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modal: (error as Error).message,
        })
      );
      return (error as Error).message;
    }
  }, [apirUrl, dispatch]);

  return { getGame };
};

export default useGame;
