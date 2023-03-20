import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import ProtectedRoute from "./ProtectedRoute";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When rendered and with a valid token on it", () => {
    test("Then it should show the react element received by props", () => {
      const state = { user: { token: "someToken" } };
      (useAppSelector as jest.Mock).mockImplementation((selector) =>
        selector(state)
      );
      const reactElement = <div>Protected Route</div>;
      const expectedText = "Protected Route";

      renderRouterWithProviders({}, <ProtectedRoute element={reactElement} />);
      const expectedReactElement = screen.getByText(expectedText);

      expect(expectedReactElement).toBeInTheDocument();
    });
  });
});
