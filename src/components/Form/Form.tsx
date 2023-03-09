import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <FormStyled>
        <label>
          Username
          <input
            type="username"
            placeholder="Username"
            name="username"
            className="input-login"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input-login"
          />
        </label>
        <Button text="Entrar" />
      </FormStyled>
    </ThemeProvider>
  );
};

export default Form;
