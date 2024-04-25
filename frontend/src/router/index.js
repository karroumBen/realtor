import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import MainLayout from '../components/MainLayout';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import NotAuthorizedPage from '../components/NotAuthorizedPage';
import PageNotFound from '../components/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/unauthorized",
        element: <NotAuthorizedPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

export default router;