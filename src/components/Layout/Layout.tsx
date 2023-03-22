import { useEffect } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { showFeedbackUser, showSuccesFeedback } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isError, isSucces, modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (isError) {
      showFeedbackUser(modal);
    }

    if (isSucces) {
      showSuccesFeedback(modal);
    }
  }, [isError, isSucces, modal]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
    </>
  );
};

export default Layout;
