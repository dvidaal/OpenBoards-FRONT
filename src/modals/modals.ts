import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const showFeedbackUser = (message: string) => {
  toast.error(message, {});
};

export const showSuccesFeedback = (message: string) => {
  toast.success(message, {});
};
