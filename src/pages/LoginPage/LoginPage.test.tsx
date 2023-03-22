import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import LoginPage from "./LoginPage";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserState } from "../../store/features/user/types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      renderRouterWithProviders({}, <LoginPage />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should navigate to the root path", () => {
      const user: UserState = {
        isLogged: true,
        token: "",
        username: "",
        id: "",
      };

      renderRouterWithProviders({ user: user }, <LoginPage />);

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
