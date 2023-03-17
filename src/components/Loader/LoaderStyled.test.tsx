import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader with role loader", () => {
      renderWithProviders(<Loader />);

      const expectedResult = screen.getByRole("loader");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
