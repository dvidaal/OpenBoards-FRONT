import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import renderWithProviders from "../../testUtils/renderWithProviders";
import ProtectedRoute from "./ProtectedRoute";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When rendered and with a valid token on it", () => {
    test("Then it should show the react element received by props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "someToken",
      });

      const element = <div>Protected Route</div>;

      renderWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Protected Route");

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
