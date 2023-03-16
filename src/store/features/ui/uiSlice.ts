import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ModalPayload from "../../../types/types";

export const initialUiState: ModalPayload = {
  modal: "",
  isError: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): ModalPayload => ({
      ...currentUiState,
      modal: action.payload.modal,
      isError: action.payload.isError,
    }),

    setLoader: (currentUiState): ModalPayload => ({
      ...currentUiState,
      isLoading: true,
    }),

    unsetLoder: (currentUiState): ModalPayload => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showModal: showModalActionCreator,
  setLoader: setLoaderActionCreator,
  unsetLoder: unsetLoaderActionCreator,
} = uiSlice.actions;
