import { useEffect } from "react";
import { useParams } from "react-router";
import GameDetailCard from "../../components/GameDetailCard/GameDetailCard";
import useGame from "../../hooks/useGame/useGame";
import { useAppSelector } from "../../store/hooks";

const DetailPage = (): JSX.Element => {
  const { getGameById } = useGame();
  const { singleGame } = useAppSelector((state) => state.game);
  let { id } = useParams();

  useEffect(() => {
    getGameById(id!);
  }, [getGameById, id]);

  return <GameDetailCard game={singleGame} />;
};

export default DetailPage;
