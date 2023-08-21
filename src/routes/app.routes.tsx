import { Flex } from "@chakra-ui/react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home/index";

export function AppRoutes(){
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/",
          component: Home,
        },
    ]

  return (
      <Flex width="100%" height="100vh" overflow="hidden">
        <Flex flexDirection="column" flex="1" minWidth="0">
              <Switch>
                {routes.map((router) => (
                  <Route
                    key={router.path}
                    path={router.path}
                    component={router.component}
                    exact
                  />
                ))}
                <Redirect to="/" />
              </Switch> 
        </Flex>
      </Flex>
  );
}