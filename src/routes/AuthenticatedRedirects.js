import AppWrapper from "layout/AppWrapper";
import { checkAppAccess } from "helpers/utils/accessCheck";
import { Route, Redirect, withRouter } from "react-router-dom";
import TopBar from "components/Layout/TopBar";

// Wrapper for Private Routes
const AuthenticatedRedirects = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      exact
      render={(props) => {
        if (!localStorage.getItem("token")) {
          return (
            <Redirect
              to={{
                pathname: "/auth/signIn",
                state: { from: props.location },
              }}
            />
          );
        }

        if (!checkAppAccess()) {
          return <Redirect to="/accessDenied" />;
        }

        if (window.location.href.includes("home/drafts/add")) {
          return (
            <div className="h-[100vh] w-full">
              <TopBar />
              <div className="w-full height-app-container">
                <Component {...props} />
              </div>
            </div>
          );
        }

        return (
          <AppWrapper>
            <Component {...props} />
          </AppWrapper>
        );
      }}
    />
  );
};

export default withRouter(AuthenticatedRedirects);
