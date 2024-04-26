import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import MainLayout from '../components/MainLayout';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import NotAuthorizedPage from '../components/NotAuthorizedPage';
import PageNotFound from '../components/PageNotFound';
import PropertyList from '../features/propertyList';
import PropertyDetails from "../components/PropertyDetails";

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
        path: "/properties",
        element: <PropertyList />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
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