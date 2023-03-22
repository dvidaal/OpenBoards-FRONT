import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { GamesStructure } from "../../types/types";
import HomePage from "./HomePage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of games and one with the name game 'Némesis'", () => {
      const mockGame: GamesStructure = [
        {
          avatar: "",
          data: "",
          game: "Némesis",
          hour: "",
          plazasLibres: 2,
          bio: "",
          id: "",
          createdBy: "",
        },
        {
          avatar: "",
          data: "f",
          game: "Virus!",
          hour: "",
          plazasLibres: 2,
          bio: "",
          id: "",
          createdBy: "",
        },
      ];

      renderRouterWithProviders(
        {
          game: {
            games: mockGame,
            singleGame: {
              game: "",
              avatar: "",
              data: "",
              hour: "",
              bio: "",
              plazasLibres: 2,
              id: "",
              createdBy: "",
            },
          },
        },
        <HomePage />
      );

      const expectedResult = screen.getByText("Némesis");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
