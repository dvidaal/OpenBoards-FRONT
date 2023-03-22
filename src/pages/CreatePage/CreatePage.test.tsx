import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CreatePage from "./CreatePage";

describe("Given a CreatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a input with the rale combobox", () => {
      renderRouterWithProviders({}, <CreatePage />);

      const expectedInput = screen.getByRole("combobox");

      expect(expectedInput).toBeInTheDocument();
    });
  });
});
