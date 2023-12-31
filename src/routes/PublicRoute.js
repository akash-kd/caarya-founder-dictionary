import { Redirect } from "react-router-dom";
import SignIn from "pages/AuthPages/SignIn";
import Unauthorized from "layout/Unauthorized";
import { checkAppAccess } from "helpers/utils/accessCheck";
import RedirectPage from "pages/AuthPages/Redirect";

// Public Routes
// Routes for Authenticating Users
const publicRoutes = [
  // Authentication
  {
    path: "/auth/signIn",
    component: () =>
      localStorage.getItem("token") ? (
        checkAppAccess() ? (
          window.innerWidth < 1024 ? (
            <Redirect to="/home/sus/0" />
          ) : (
            <Redirect to="/home/sus/0" />
          )
        ) : (
          <Redirect to="/accessDenied" />
        )
      ) : (
        <SignIn />
      ),
  },
  {
    path: "/accessDenied",
    component: Unauthorized,
  },
  {
    path: "/redirect",
    component: RedirectPage,
  },
];

export { publicRoutes };
