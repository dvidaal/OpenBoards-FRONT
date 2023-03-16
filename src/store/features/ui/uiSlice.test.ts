import ModalPayload from "../../../types/types";
import { showModalActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it receives a showModal action", () => {
    test("Then it should response with the property isError set to true", () => {
      const initialUiState: ModalPayload = {
        modal: "",
        isError: false,
        isLoading: true,
      };

      const modalMessage = "Wrong credentials";

      const modalPayload: ModalPayload = {
        modal: modalMessage,
        isError: true,
        isLoading: false,
      };

      const showModal = showModalActionCreator(modalPayload);
      const expectedShowModal = uiReducer(initialUiState, showModal);

      expect(expectedShowModal).toStrictEqual(modalPayload);
    });
  });
});
