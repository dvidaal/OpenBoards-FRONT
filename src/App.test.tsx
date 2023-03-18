import { screen } from "@testing-library/react";
import App from "./App";
import { showFeedbackUser } from "./modals/modals";
import { renderRouterWithProviders } from "./testUtils/renderWithProviders";

jest.mock("./modals/modals", () => ({
  showFeedbackUser: jest.fn(),
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
          },
        },
        <App />
      );

      expect(showFeedbackUser).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
