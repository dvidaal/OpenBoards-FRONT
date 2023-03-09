import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/LoginPage/LoginPage";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />;
    </ThemeProvider>
  );
};

export default App;
