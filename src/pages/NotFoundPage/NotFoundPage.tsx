import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <div className="notFound-container">
        <img
          src="/notfound.webp"
          alt="Logo de OpenBoards"
          width="170"
          height="270"
          className="notFound-container__logo"
        />
        <h2 className="notFound-container__404">404 página no encontrada</h2>
        <Link to="/">
          <span className="notFound-container__home">Vuelve al inicio</span>
        </Link>
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
