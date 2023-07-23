import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginForm from "./LoginForm";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserCredentials } from "../../hooks/useUser/types";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLogin,
}));

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with the text 'Username'", () => {
      const textForm = "Username";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedLabel = screen.getByRole("textbox", { name: textForm });

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When the user introduce his username", () => {
    test("Then it should change the value in the field 'username'", async () => {
      const usernameLabel = "Username";
      const fieldText = "Didi";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedResult = screen.getByRole("textbox", {
        name: usernameLabel,
      });

      await act(async () => await userEvent.type(expectedResult, fieldText));

      expect(expectedResult).toHaveValue(fieldText);
    });
  });

  describe("When the user introduce his password", () => {
    test("Then it should change the value of the field 'passwpord'", async () => {
      const passwordText = "Password";
      const fieldText = "12345678";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedResult = screen.getByLabelText(passwordText);

      await act(async () => await userEvent.type(expectedResult, fieldText));

      expect(expectedResult).toHaveValue(fieldText);
    });
  });

  describe("When the user complete both fields with his username and password and submits", () => {
    test("Then the loginUser function should be calles", async () => {
      const usernamePlaceholder = "Username";
      const passwordPlaceholder = "Password";
      const buttonText = "Entrar";

      const mockUser: UserCredentials = {
        username: "lDidi",
        password: "12345678",
      };

      renderRouterWithProviders({}, <LoginForm />);

      const usernameField = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);
      const buttonLogin = screen.getByRole("button", { name: buttonText });

      await act(
        async () => await userEvent.type(usernameField, mockUser.username)
      );
      await act(
        async () => await userEvent.type(passwordField, mockUser.password)
      );
      await act(async () => await userEvent.click(buttonLogin));

      expect(mockLogin).toHaveBeenCalledWith(mockUser);
    });
  });
});
