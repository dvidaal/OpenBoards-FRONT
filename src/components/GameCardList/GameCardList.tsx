import { useEffect } from "react";
import useGame from "../../hooks/useGame/useGame";
import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = (): JSX.Element => {
  const { getGame } = useGame();

  useEffect(() => {
    getGame();
  }, [getGame]);

  const games = useAppSelector((state) => state.game.games);

  return (
    <GameCardListStyled>
      {games.map((game) => (
        <li key={game.game}>
          <GameCard game={game} />
        </li>
      ))}
    </GameCardListStyled>
  );
};

export default GameCardList;
