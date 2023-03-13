import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import useToken from "./hooks/useToken/useToken";
import { showFeedbackUser } from "./modals/modals";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { getToken } = useToken();
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    getToken();
    if (modal) {
      showFeedbackUser(modal);
    }
  }, [getToken, modal]);

  return (
    <div className="container">
      <Layout />
    </div>
  );
};

export default App;
