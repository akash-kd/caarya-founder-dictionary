import React from "react";
import { Redirect } from "react-router-dom";
import { checkAppAccess } from "helpers/utils/accessCheck";
import SussForm from "pages/Suss Form";

// Authenticated Paths

// Array of routes only a logged in user can access
const privateRoutes = [
  {
    path: "/sussform",
    component: SussForm,
    name: "New Suss Form",
    tab: "Suss Form"
  },
  
  {
    path: "/",
    exact: true,
    component: () =>
      localStorage.getItem("token") ? (
        checkAppAccess() ? (
          window.innerWidth < 1024 ? (
            <Redirect to="/sussform" />
          ) : (
            <Redirect to="/sussform" />
          )
        ) : (
          <Redirect to="/accessDenied" />
        )
      ) : (
        <Redirect to="/auth/signIn" />
      ),
  },
];

export { privateRoutes };
