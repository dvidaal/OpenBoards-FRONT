import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with the text 'Entrar' on it", () => {
      const buttonText = "Entrar";

      render(<Button text={buttonText} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
