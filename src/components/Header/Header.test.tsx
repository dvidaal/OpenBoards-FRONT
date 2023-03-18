import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectText = "Logo OpenBoards";

      renderRouterWithProviders(
        {
          user: { isLogged: true, token: "", username: "", id: "" },
        },
        <Header />
      );

      const result = screen.getByAltText(expectText);

      expect(result).toBeInTheDocument();
    });
  });
});
