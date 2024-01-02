import { Switch, BrowserRouter as Router } from "react-router-dom";

import { publicRoutes } from "routes/PublicRoute";
import { privateRoutes } from "routes/PrivateRoute";

import NonAuthMiddleware from "routes/NonAuthMiddleware";
import AuthenticatedRedirects from "routes/AuthenticatedRedirects";

function App() {
  return (
    <div>
      <div className="block min-h-screen bg-[#F0F3F4]">
        <Router forceRefresh={true}>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <NonAuthMiddleware
                path={route.path}
                component={route.component}
                key={idx}
              />
            ))}
            {privateRoutes.map((route, idx) => (
              <AuthenticatedRedirects
                path={route.path}
                component={route.component}
                key={idx}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
