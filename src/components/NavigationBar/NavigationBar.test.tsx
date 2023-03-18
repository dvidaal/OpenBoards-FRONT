import { renderWithProviders } from "../../testUtils/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When rendered", () => {
    test("Then it should show a house image", () => {
      renderWithProviders(<NavigationBar />);
    });
  });
});
