import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { GameStructure } from "../../types/types";
import GameDetailCard from "./GameDetailCard";

describe("Given a GameDetailCard component", () => {
  describe("When rendered", () => {
    test("Then it should show a detail card with an h2 inside", () => {
      const mockGame: GameStructure = {
        game: "",
        avatar: "",
        date: "",
        hour: "",
        bio: "",
        plazasLibres: 2,
        id: "",
      };

      renderWithProviders(<GameDetailCard game={mockGame} />);

      const expectedResult = screen.getByRole("heading");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
