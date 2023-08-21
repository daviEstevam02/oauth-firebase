import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from "../pages/Login/index";

export function AuthRoutes(){
    const routes = [
        {
          id: 1,
          name: "Login",
          path: "/",
          component: Login,
        },
    ]

    return (
          <Switch>
          {routes.map((router) => (
            <Route key={router.path} path={router.path} component={router.component} exact />
          ))}
          <Redirect to="/" />
        </Switch>
      );
}