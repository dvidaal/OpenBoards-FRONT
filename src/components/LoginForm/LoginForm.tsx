import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";
import { Link } from "react-router-dom";

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

  const isDisabled =
    dataFormLogin.password === "" || dataFormLogin.username === "";

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
      <Button isDisabled={isDisabled} text="Entrar" className="form__button" />
      <div className="register">
        <span className="register__info">¿Aún no estas registrado?</span>
        <Link to="/register" className="register__account">
          Crear cuenta
        </Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
