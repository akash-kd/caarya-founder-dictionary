import AppWrapper from "./layout/AppWrapper";
import { Route, Redirect, withRouter } from "react-router-dom";

// Wrapper for Private Routes
const AuthenticatedRedirects = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {

        // No Sign In Functionality Yet
        // if (!localStorage.getItem("token")) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/auth/signIn",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }

        // if (!checkAppAccess()) {
        //   return <Redirect to="/accessDenied" />;
        // }

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
