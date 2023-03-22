import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with h2 label", () => {
      const expectedTitle = "404 página no encontrada";

      renderRouterWithProviders({}, <NotFoundPage />);

      const expectedRender = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedRender).toBeInTheDocument();
    });
  });
});
