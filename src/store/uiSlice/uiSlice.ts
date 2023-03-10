import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ModalPayload from "./types";

export const initialUiState: ModalPayload = {
  modal: "",
  isError: false,
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
  },
});

export const uiReducer = uiSlice.reducer;
export const { showModal: showModalActionCreatoer } = uiSlice.actions;
