import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      renderRouterWithProviders(<LoginPage />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
