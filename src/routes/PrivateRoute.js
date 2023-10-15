import React from "react";
import { Redirect } from "react-router-dom";
import { checkAppAccess } from "helpers/utils/accessCheck";
import SussForm from "pages/Suss Form";
import ResearchBank from "pages/ResearchBank";

// Authenticated Paths

// Array of routes only a logged in user can access
const privateRoutes = [
  {
    path: "/home/sus",
    component: SussForm,
    name: "New Suss Form",
    tab: "Suss Form",
  },
  {
    path: "/home/researchBank",
    component: ResearchBank,
    name: "Research Bank",
    tab: "Research Bank",
  },

  {
    path: "/",
    exact: true,
    component: () =>
      localStorage.getItem("token") ? (
        checkAppAccess() ? (
          window.innerWidth < 1024 ? (
            <Redirect to="/home/sus" />
          ) : (
            <Redirect to="/home/sus" />
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
