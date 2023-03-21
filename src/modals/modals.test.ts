import { toast } from "react-toastify";
import { showFeedbackUser, showSuccesFeedback } from "./modals";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given the modals functions", () => {
  describe("When showErrorModal is called with an error message 'Usuario o contraseña incorrectos'", () => {
    test("Then its toast.error function should be called with the error message", () => {
      const errorMessage = "Usuario o contraseña incorrectos";
      const expectedObject = {};

      showFeedbackUser(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, expectedObject);
    });
  });

  describe("When it is rendered with a non-error and the message 'Partida eliminada correctamente'", () => {
    test("Then it should render the ToastContainer Component for success", () => {
      const successMessage = "Partida eliminada correctamente";
      const expectedObject = {};

      showSuccesFeedback(successMessage);

      expect(toast.success).toHaveBeenCalledWith(
        successMessage,
        expectedObject
      );
    });
  });
});
