import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectedText = "Logo OpenBoards";

      renderRouterWithProviders(<Layout />, {
        user: { isLogged: true, token: "", username: "" },
      });

      const result = screen.getByAltText(expectedText);

      expect(result).toBeInTheDocument();
    });
  });
});
