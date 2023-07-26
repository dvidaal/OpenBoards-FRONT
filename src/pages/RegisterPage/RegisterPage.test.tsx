import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a RegisterPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a field with the text 'Nombre de usuario'", () => {
      renderRouterWithProviders({}, <RegisterPage />);

      const expectedResult = screen.getByPlaceholderText("Nombre de usuario");

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Crear Cuenta'", () => {
      const buttonText = "Crear cuenta";

      renderRouterWithProviders({}, <RegisterPage />);

      const expectedResult = screen.getByRole("button", { name: buttonText });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
