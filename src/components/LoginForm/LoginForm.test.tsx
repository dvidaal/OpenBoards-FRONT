import { ThemeProvider } from "styled-components";
import { screen } from "@testing-library/react";
import theme from "../../styles/theme";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../testUtil";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with the text 'Username'", () => {
      const textForm = "Username";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <LoginForm />
        </ThemeProvider>
      );

      const expectedLabel = screen.getByRole("textbox", { name: textForm });

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
