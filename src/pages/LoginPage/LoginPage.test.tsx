import { ThemeProvider } from "styled-components";
import { screen } from "@testing-library/react";
import theme from "../../styles/theme";
import LoginPage from "./LoginPage";
import renderWithProviders from "../../testUtil";

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
