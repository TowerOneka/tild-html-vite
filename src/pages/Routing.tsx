import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./SignIn/Login";
import Registry from "./SignUp/SignUp";
import ProfilePage from "@/app/profile/page";
import AuthRequired from "@/shared/hoc/AuthRequired";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registry />,
  },
  {
    path: "/profile",
    element: (
      <AuthRequired>
        <ProfilePage />
      </AuthRequired>
    ), // todo
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
