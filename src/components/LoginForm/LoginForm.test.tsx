import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with the text 'Username'", () => {
      const textForm = "Username";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedLabel = screen.getByRole("textbox", { name: textForm });

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
