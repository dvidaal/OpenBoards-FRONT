import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showFeedbackUser } from "./modals/modals";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showFeedbackUser(modal);
    }
  }, [modal]);

  return (
    <div className="container">
      <ToastContainer
        className="hola"
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
      <LoginPage />;
    </div>
  );
};

export default App;
