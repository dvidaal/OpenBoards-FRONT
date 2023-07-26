import { useState } from "react";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser/useUser";
import { RegisterCredentials } from "../../hooks/useUser/types";

const RegisterForm = (): JSX.Element => {
  const initialRegisterUserCredentials: RegisterCredentials = {
    username: "",
    email: "",
    password: "",
  };

  const [userRegisterCredentials, setUserRegisterCredentials] = useState(
    initialRegisterUserCredentials
  );

  const { registerUser } = useUser();

  const isDisabled =
    userRegisterCredentials.email === "" ||
    userRegisterCredentials.password === "" ||
    userRegisterCredentials.username === "";

  const handleDataFormRegister = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserRegisterCredentials({
      ...userRegisterCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userRegister: RegisterCredentials = {
      username: userRegisterCredentials.username,
      email: userRegisterCredentials.email,
      password: userRegisterCredentials.password,
    };

    await registerUser(userRegister);

    setUserRegisterCredentials({ ...userRegisterCredentials });
  };

  return (
    <RegisterFormStyled
      className="register-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label>
        Nombre de usuario
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          className="register-form__field"
          value={userRegisterCredentials.username}
          onChange={handleDataFormRegister}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="register-form__field"
          value={userRegisterCredentials.email}
          onChange={handleDataFormRegister}
        />
      </label>
      <label>
        Establezca una contraseña
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="register-form__field"
          value={userRegisterCredentials.password}
          onChange={handleDataFormRegister}
        />
      </label>
      <Button
        isDisabled={isDisabled}
        className="register-form__button"
        text="Crear cuenta"
      />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
