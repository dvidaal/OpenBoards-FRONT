import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
