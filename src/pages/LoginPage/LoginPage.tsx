import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <div className="container-login">
        <img
          src="openBoardsLogo.webp"
          alt="Logo Open Boards"
          className="container-login__logo"
        />
        <span className="container-login__slogan">
          Encuentras los juegos, te reservamos la mesa
        </span>
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
