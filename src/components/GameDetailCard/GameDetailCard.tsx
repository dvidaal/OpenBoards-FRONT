import { GameStructure } from "../../types/types";
import GameDetailCardStyled from "./GameDetailCardStyled";

interface CardDetailProps {
  game: GameStructure;
}

const GameDetailCard = ({ game }: CardDetailProps): JSX.Element => {
  return (
    <GameDetailCardStyled>
      <div className="image-container">
        <img
          src={game.avatar}
          alt="Cover del juego"
          className="image-container__detail-image"
          width="250"
          height="250"
        />
      </div>
      <h2 className="detail-title">Partida de {game.game}</h2>
      <span className="detail-date">{game.data}</span>
      <span className="detail-freespace">
        {game.plazasLibres} plazas libres
      </span>
      <span className="detail-bio">Sobre la partida</span>
      <span className="detail-bio-about">{game.bio}</span>
    </GameDetailCardStyled>
  );
};

export default GameDetailCard;
