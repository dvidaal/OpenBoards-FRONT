import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When rendered", () => {
    test("Then it should show a house image", () => {
      const home = "home";
      const blades = "blades";

      renderRouterWithProviders({}, <NavigationBar />);

      const homelink = screen.getByRole("link", { name: home });
      const bladeslink = screen.getByRole("link", { name: blades });

      expect(homelink).toBeInTheDocument();
      expect(bladeslink).toBeInTheDocument();
    });
  });
});
