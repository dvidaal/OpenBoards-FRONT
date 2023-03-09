import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyled>{text}</ButtonStyled>
    </ThemeProvider>
  );
};

export default Button;
