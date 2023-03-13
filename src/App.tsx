import { useEffect } from "react";
import Layout from "./components/Layout/Layout";

import { showFeedbackUser } from "./modals/modals";
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
      <Layout />
    </div>
  );
};

export default App;
