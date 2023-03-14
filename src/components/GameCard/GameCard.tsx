import { GameStructure } from "../../types/types";
import GameCardStyled from "./GameCardStyled";

export interface CardGameProps {
  game: GameStructure;
}

const GameCard = ({ game }: CardGameProps): JSX.Element => {
  return (
    <GameCardStyled>
      <div className="info-container">
        <img
          src={game.avatar}
          alt="Cover del juego de mesa"
          width="200"
          height="200"
          className="game-image"
        />
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
