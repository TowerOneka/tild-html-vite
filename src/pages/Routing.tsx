import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./SignIn/Login";
import Registry from "./SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registry />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
