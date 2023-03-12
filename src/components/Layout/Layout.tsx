import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Layout = (): JSX.Element => {
  return (
    <>
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
