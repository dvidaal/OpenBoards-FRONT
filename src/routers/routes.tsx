import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import CreatePage from "../pages/CreatePage/CreatePage";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { endpoints } from "./types";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.register, element: <RegisterPage /> },
      {
        path: "detail/:id",
        element: <ProtectedRoute element={<DetailPage />} />,
      },
      {
        path: "/create",
        element: <ProtectedRoute element={<CreatePage />} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
