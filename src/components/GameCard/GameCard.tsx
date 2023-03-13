import { GameStructure } from "../../types/types";
import GameCardStyled from "./GameCardStyled";

export interface CardGameProps {
  game: GameStructure;
}

const GameCard = ({ game }: CardGameProps): JSX.Element => {
  return (
    <GameCardStyled>
      <img
        src={game.avatar}
        alt="Cover del juego de mesa"
        width="150"
        height="150"
      />
      <div className="info-container">
        <h2 className="info-container__game-title">{game.game}</h2>
        <span className="info-container__game-hour">{game.hour}</span>
        <span className="info-container__game-free-space">
          Plazas libres: {game.plazasLibres}
        </span>
      </div>
    </GameCardStyled>
  );
};

export default GameCard;
