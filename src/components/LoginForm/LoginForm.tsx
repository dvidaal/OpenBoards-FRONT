import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="form">
      <label>
        Username
        <input
          type="username"
          placeholder="Username"
          name="username"
          className="form__field"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form__field"
        />
      </label>
      <Button text="Entrar" />
    </LoginFormStyled>
  );
};

export default LoginForm;
