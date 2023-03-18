import { screen } from "@testing-library/react";
import App from "./App";
import { showFeedbackUser } from "./modals/modals";
import { renderWithProviders } from "./testUtils/renderWithProviders";

jest.mock("./modals/modals", () => ({
  showFeedbackUser: jest.fn(),
}));

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo if the user is logged", () => {
      const expectedText = "Logo OpenBoards";

      renderWithProviders(<App />, {
        user: { isLogged: true, token: "", username: "", id: "" },
      });

      const result = screen.getByAltText(expectedText);

      expect(result).toBeInTheDocument();
    });

    test("Then it should render ToastContainer with error message", () => {
      const expectedErrorMessage = "Oh";

      renderWithProviders(<App />, {
        ui: {
          modal: "Oh",
          isError: true,
          isLoading: false,
        },
      });

      expect(showFeedbackUser).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
