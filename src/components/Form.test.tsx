import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with the text 'Username'", () => {
      const textForm = "Username";

      render(<Form />);

      const expectedLabel = screen.getByRole("textbox", { name: textForm });

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
