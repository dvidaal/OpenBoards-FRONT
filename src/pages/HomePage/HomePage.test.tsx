import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { GamesStructure } from "../../types/types";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of games and one with the name game 'Némesis'", () => {
      const mockGame: GamesStructure = [
        {
          avatar: "",
          date: "",
          game: "Némesis",
          hour: "",
          plazasLibres: 2,
          bio: "",
        },
        {
          avatar: "",
          date: "f",
          game: "Virus!",
          hour: "",
          plazasLibres: 2,
          bio: "",
        },
      ];

      renderWithProviders(<HomePage />, { game: { games: mockGame } });

      const expectedResult = screen.getByText("Némesis");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
