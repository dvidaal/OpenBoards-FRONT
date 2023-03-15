import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { GameStructure } from "../../types/types";
import GameCard from "./GameCard";

describe("Given a GameCard component", () => {
  describe("When it rendered", () => {
    test("Then it should show a GameCard with an image", () => {
      const mockGame: GameStructure = {
        avatar: "fake",
        date: "fake",
        game: "fake",
        hour: "fake",
        plazasLibres: 2,
        bio: "fake",
        id: "fake",
      };

      renderRouterWithProviders(<GameCard game={mockGame} />);

      const expectedResult = screen.getByRole("img");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
