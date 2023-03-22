import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockGameCreateForm } from "../../mocks/mocks";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

const mockedSubmit = jest.fn();

jest.mock("../../hooks/useGame/useGame", () => () => ({
  createGame: mockedSubmit,
}));

describe("Given a CreatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a input with the rale combobox", () => {
      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("combobox");

      expect(expectedInput).toBeInTheDocument();
    });
  });

  describe("When the user submits the form with the information of the game", () => {
    test("Then the createGame function should be called", async () => {
      const game = "Juego Propuesto";
      const avatar = "Introduce cover del juego";
      const spaces = "Plazas libres";
      const date = "Selecciona fecha";
      const bio = "Cuenta a los demás sobre la partida";
      const buttonText = "Crear partida";

      renderRouterWithProviders(
        {
          user: {
            isLogged: true,
            token: "",
            username: "",
            id: "64062ae6a801af8faeaee9ab",
          },
        },
        <CreateForm />
      );

      const gameInput = screen.getByRole("combobox", { name: game });
      const avatarInput = screen.getByPlaceholderText(avatar);
      const spacesInput = screen.getByLabelText(spaces);
      const dateInput = screen.getByLabelText(date);
      const bioInput = screen.getByPlaceholderText(bio);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await act(
        async () =>
          await userEvent.selectOptions(gameInput, mockGameCreateForm.game)
      );

      await act(
        async () => await userEvent.type(avatarInput, mockGameCreateForm.avatar)
      );

      await act(
        async () =>
          await userEvent.type(
            spacesInput,
            mockGameCreateForm.plazasLibres.toString()
          )
      );

      await act(async () => await userEvent.click(dateInput));
      await act(
        async () => await userEvent.type(dateInput, mockGameCreateForm.data)
      );

      await act(
        async () => await userEvent.type(bioInput, mockGameCreateForm.bio)
      );

      await act(async () => await userEvent.click(submitButton));

      expect(mockedSubmit).toHaveBeenCalledWith(mockGameCreateForm);
    });
  });
});
