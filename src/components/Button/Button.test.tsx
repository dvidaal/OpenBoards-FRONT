import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with the text 'Entrar' on it", () => {
      const buttonText = "Entrar";

      render(
        <ThemeProvider theme={theme}>
          <Button text={buttonText} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
