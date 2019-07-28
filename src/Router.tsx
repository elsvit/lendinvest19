/**
 * @fileOverview Routers
 */

import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import * as React from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";

import SplashPage from "./components/pages/Splash";
import LoansPage from "./components/pages/Loans";

import { ROUTES } from "./constants";

interface IRouterProps extends RouteProps {
  history: History;
}

class Router extends React.Component<IRouterProps> {
  public render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path={ROUTES.SPLASH} component={SplashPage} />
          <Route exact path={ROUTES.LOANS} component={LoansPage} />
          <Route
            path={ROUTES.SPLASH}
            render={() => <Redirect to={ROUTES.SPLASH} />}
          />
          <Redirect to={ROUTES.SPLASH} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Router;
