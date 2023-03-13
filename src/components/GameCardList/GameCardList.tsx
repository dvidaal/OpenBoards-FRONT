import { useEffect } from "react";
import useGame from "../../hooks/useGame/useGame";
import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";

const GameCardList = (): JSX.Element => {
  const { getGame } = useGame();

  useEffect(() => {
    getGame();
  }, [getGame]);

  const games = useAppSelector((state) => state.game.games);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.game}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameCardList;
