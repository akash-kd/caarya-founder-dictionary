import React from "react";
import { Redirect } from "react-router-dom";
import { checkAppAccess } from "helpers/utils/accessCheck";
import SussForm from "pages/Suss Form";
import ResearchBank from "pages/ResearchBank";
import Dashboard from "pages/Dashboard";

// Authenticated Paths

// Array of routes only a logged in user can access
const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    tab: "Dashboard",
  },
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
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/dashboard" />
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
