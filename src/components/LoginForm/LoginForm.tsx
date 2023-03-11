import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const [dataFormLogin, setDataFormLogin] = useState({
    username: "",
    password: "",
  });

  const handleDataFormLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataFormLogin({
      ...dataFormLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser(dataFormLogin);
  };

  return (
    <LoginFormStyled
      className="form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label>
        Username
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form__field"
          value={dataFormLogin.username}
          onChange={handleDataFormLogin}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form__field"
          value={dataFormLogin.password}
          onChange={handleDataFormLogin}
        />
      </label>
      <Button text="Entrar" />
    </LoginFormStyled>
  );
};

export default LoginForm;
