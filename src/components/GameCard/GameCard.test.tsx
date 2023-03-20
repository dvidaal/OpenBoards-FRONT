import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockFirstGame } from "../../mocks/mocks";
import { UserState } from "../../store/features/user/types";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { GameStructure } from "../../types/types";
import GameCard from "./GameCard";

const mockDelete = jest.fn();

jest.mock("../../hooks/useGame/useGame", () => () => ({
  deleteGameById: mockDelete,
}));

describe("Given a GameCard component", () => {
  describe("When it rendered", () => {
    test("Then it should show a GameCard with an image", () => {
      const mockGame: GameStructure = {
        avatar: "fake",
        data: "fake",
        game: "fake",
        hour: "fake",
        plazasLibres: 2,
        bio: "fake",
        id: "fake",
        createdBy: "fake",
      };

      renderRouterWithProviders({}, <GameCard game={mockGame} />);

      const expectedResult = screen.getByRole("img");

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button", () => {
    test("Then the deleteGameById function should be called", async () => {
      const userIsLoggedState: UserState = {
        username: "lDidi",
        id: "64062ae6a801af8faeaee9ab",
        token: "someToken",
        isLogged: true,
      };

      const buttonText = "delete";

      renderRouterWithProviders(
        { user: userIsLoggedState },
        <GameCard game={mockFirstGame} />
      );
      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(mockDelete).toHaveBeenCalledWith(mockFirstGame.id);
    });
  });
});
