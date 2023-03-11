import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginPageStyled className="container-login">
      <img
        src="openBoardsLogo.webp"
        alt="Logo Open Boards"
        className="container-login__logo"
      />
      <span className="container-login__slogan">
        Encuentras los juegos, te reservamos la mesa
      </span>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
