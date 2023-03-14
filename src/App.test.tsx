import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./testUtils/renderWithProviders";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectedText = "Logo OpenBoards";

      renderWithProviders(<App />, {
        user: { isLogged: true, token: "", username: "" },
      });

      const result = screen.getByAltText(expectedText);

      expect(result).toBeInTheDocument();
    });
  });
});
