import { RouterProvider } from "react-router-dom";
import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getComponentRouter, router } from "../routers/routes";
import { RootState, setupStore, store } from "../store";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export const renderRouterWithProviders = (
  preloadedState?: PreloadedState<RootState>,
  ui?: React.ReactElement
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};
