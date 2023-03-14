import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectedText = "Logo OpenBoards";

      renderWithProviders(<Layout />, {
        user: { isLogged: true, token: "", username: "" },
      });

      const result = screen.getByAltText(expectedText);

      expect(result).toBeInTheDocument();
    });
  });
});
