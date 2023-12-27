import React from "react";
import { Redirect } from "react-router-dom";
import { checkAppAccess } from "helpers/utils/accessCheck";
import SussForm from "pages/Suss Form";
import ResearchBank from "pages/ResearchBank";
import Dashboard from "pages/Dashboard";
import Drafts from "pages/Drafts";
import ChapterFlow from "pages/Drafts/ChapterFlow";
import AddDrafts from "pages/Drafts/AddDrafts";
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
    path: "/home/sus/:id",
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
    path: "/home/drafts/add",
    component: AddDrafts,
    name: "Drafts",
    tab: "Drafts",
  },
  {
    path: "/home/drafts/chapterflow",
    component: ChapterFlow,
    name: "Drafts",
    tab: "Drafts",
  },
  {
    path: "/home/drafts",
    component: Drafts,
    name: "Drafts",
    tab: "Drafts",
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
