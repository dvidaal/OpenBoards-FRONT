import ModalPayload from "../../../types/types";
import {
  showModalActionCreator,
  uiReducer,
  unsetLoaderActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it receives a showModal action", () => {
    test("Then it should response with the property isError set to true", () => {
      const initialUiState: ModalPayload = {
        modal: "",
        isError: false,
        isLoading: false,
        isSucces: false,
      };

      const modalMessage = "Wrong credentials";

      const modalPayload: ModalPayload = {
        modal: modalMessage,
        isError: true,
        isLoading: false,
        isSucces: false,
      };

      const showModal = showModalActionCreator(modalPayload);
      const expectedShowModal = uiReducer(initialUiState, showModal);

      expect(expectedShowModal).toStrictEqual(modalPayload);
    });
  });

  describe("When it receives a unsetLoader action", () => {
    test("Then it should render a loader with the aria-role 'loader'", () => {
      const initialUiState: ModalPayload = {
        modal: "",
        isError: false,
        isLoading: false,
        isSucces: false,
      };

      const modalPayload: ModalPayload = {
        modal: "",
        isError: false,
        isLoading: false,
        isSucces: false,
      };

      const unsetLoader = unsetLoaderActionCreator();
      const expectedShowModal = uiReducer(initialUiState, unsetLoader);

      expect(expectedShowModal).toStrictEqual(modalPayload);
    });
  });
});
