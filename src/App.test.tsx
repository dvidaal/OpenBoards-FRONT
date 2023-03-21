import { screen } from "@testing-library/react";
import App from "./App";
import { showFeedbackUser, showSuccesFeedback } from "./modals/modals";
import { renderRouterWithProviders } from "./testUtils/renderWithProviders";

jest.mock("./modals/modals", () => ({
  showFeedbackUser: jest.fn(),
  showSuccesFeedback: jest.fn(),
}));

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectedText = "Logo OpenBoards";

      renderRouterWithProviders(
        {
          user: { isLogged: true, token: "", username: "", id: "" },
        },
        <App />
      );

      const result = screen.getByAltText(expectedText);

      expect(result).toBeInTheDocument();
    });

    test("Then it should render ToastContainer with error message", () => {
      const expectedErrorMessage = "Oh";

      renderRouterWithProviders(
        {
          ui: {
            modal: "Oh",
            isError: true,
            isLoading: false,
            isSucces: false,
          },
        },
        <App />
      );

      expect(showFeedbackUser).toHaveBeenCalledWith(expectedErrorMessage);
    });

    test("Then it should render ToastContainer with success message", () => {
      const expectedSuccessMessage = "Ok";

      renderRouterWithProviders(
        {
          ui: {
            modal: "Ok",
            isError: false,
            isLoading: false,
            isSucces: true,
          },
        },
        <App />
      );

      expect(showSuccesFeedback).toHaveBeenCalledWith(expectedSuccessMessage);
    });
  });

  describe("When it fails to render", () => {
    test("Then it should show the logo of open boards app", () => {
      renderRouterWithProviders({});

      const homelink = screen.getByRole("img", { name: "Logo Open Boards" });

      expect(homelink).toBeInTheDocument();
    });
  });
});
