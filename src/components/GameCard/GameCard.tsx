import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useGame from "../../hooks/useGame/useGame";
import { useAppSelector } from "../../store/hooks";
import { GameStructure } from "../../types/types";
import Button from "../Button/Button";
import GameCardStyled from "./GameCardStyled";

export interface CardGameProps {
  game: GameStructure;
}

const GameCard = ({ game }: CardGameProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { deleteGameById } = useGame();
  const loggedUser = game.createdBy === id;

  const deleteIcon = <FontAwesomeIcon icon={faTrashCan} className="icon" />;

  return (
    <GameCardStyled>
      <Link to={`detail/${game.id}`}>
        <div className="info-container">
          <img
            src={game.avatar}
            alt="Cover del juego de mesa"
            width="200"
            height="200"
            className="game-image"
          />
          <h2 className="info-container__game-title">{game.game}</h2>
          <span className="info-container__game-hour">{game.data}</span>
          <span className="info-container__game-free-space">
            Plazas libres: {game.plazasLibres}
          </span>
        </div>
      </Link>
      {loggedUser && (
        <div className="card__icons">
          <Button
            className="card__button"
            ariaLabel="delete"
            icon={deleteIcon}
            action={() => deleteGameById(game.id)}
          />
        </div>
      )}
    </GameCardStyled>
  );
};

export default GameCard;
