import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { RegisterCredentials } from "../../hooks/useUser/types";
import RegisterForm from "./RegisterForm";

const mockRegister = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegister,
}));

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with the text 'Nombre de usuario'", () => {
      const textForm = "Nombre de usuario";

      renderRouterWithProviders({}, <RegisterForm />);

      const expectedLabel = screen.getByRole("textbox", { name: textForm });

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When the user introduce his username", () => {
    test("Then it should change the value in the field 'Nombre de usuario'", async () => {
      const usernameLabel = "Nombre de usuario";
      const fieldText = "Didi";

      renderRouterWithProviders({}, <RegisterForm />);

      const expectedResult = screen.getByRole("textbox", {
        name: usernameLabel,
      });

      await act(async () => await userEvent.type(expectedResult, fieldText));

      expect(expectedResult).toHaveValue(fieldText);
    });
  });

  describe("When the user introduce his password", () => {
    test("Then it should change the value of the field 'Establezca una contraseña'", async () => {
      const passwordText = "Establezca una contraseña";
      const fieldText = "12345678";

      renderRouterWithProviders({}, <RegisterForm />);

      const expectedResult = screen.getByLabelText(passwordText);

      await act(async () => await userEvent.type(expectedResult, fieldText));

      expect(expectedResult).toHaveValue(fieldText);
    });
  });

  describe("When the user complete the three fields with his username, email, password and submits", () => {
    test("Then the registerUser function should be calles", async () => {
      const usernamePlaceholder = "Nombre de usuario";
      const passwordPlaceholder = "Contraseña";
      const emailPlaceholder = "Email";
      const buttonText = "Crear cuenta";

      const mockUser: RegisterCredentials = {
        username: "lDidi",
        password: "12345678",
        email: "test@test.com",
      };

      renderRouterWithProviders({}, <RegisterForm />);

      const usernameField = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const buttonRegister = screen.getByRole("button", { name: buttonText });

      await act(
        async () => await userEvent.type(usernameField, mockUser.username)
      );
      await act(
        async () => await userEvent.type(passwordField, mockUser.password)
      );
      await act(async () => await userEvent.type(emailField, mockUser.email));
      await act(async () => await userEvent.click(buttonRegister));

      expect(mockRegister).toHaveBeenCalledWith(mockUser);
    });
  });
});
