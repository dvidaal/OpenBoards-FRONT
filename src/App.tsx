import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import useToken from "./hooks/useToken/useToken";
import { showFeedbackUser, showSuccesFeedback } from "./modals/modals";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { getToken } = useToken();
  const { isError } = useAppSelector((state) => state.ui);
  const { isSucces } = useAppSelector((state) => state.ui);
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    getToken();
    if (isError) {
      showFeedbackUser(modal);
    }

    if (isSucces) {
      showSuccesFeedback(modal);
    }
  }, [getToken, isError, isSucces, modal]);

  return (
    <div className="container">
      <Layout />
    </div>
  );
};

export default App;
