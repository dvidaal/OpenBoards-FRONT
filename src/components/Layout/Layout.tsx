import { ToastContainer } from "react-toastify";
import LoginPage from "../../pages/LoginPage/LoginPage";

const Layout = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default Layout;
