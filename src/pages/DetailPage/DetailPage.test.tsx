import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import DetailPage from "./DetailPage";

describe("Given a detail page", () => {
  describe("When rendered", () => {
    test("Then it should show a detail page of the game with a heading inside", () => {
      renderWithProviders(<DetailPage />);

      const expectedResult = screen.getByRole("heading");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
