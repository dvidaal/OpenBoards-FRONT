import Layout from "./components/Layout/Layout";
import useToken from "./hooks/useToken/useToken";

const App = () => {
  const { getToken } = useToken();

  getToken();

  return (
    <div className="container">
      <Layout />
    </div>
  );
};

export default App;
