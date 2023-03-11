import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./testUtil";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(<App />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
