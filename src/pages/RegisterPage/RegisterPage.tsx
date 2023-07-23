import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <header className="register-page">
        <h1 className="register-page__title">Crea tu cuenta de Open Boards</h1>
      </header>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
