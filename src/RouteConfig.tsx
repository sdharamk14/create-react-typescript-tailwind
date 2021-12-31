import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
interface routesInterface {
  path: string;
  component: () => JSX.Element;
}

const RouteConfig = () => {
  const routes: any[] = [
    {
      path: "/login",
      element: (
        <>
          <Login />
          <Outlet />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
          <Outlet />
        </>
      ),
    },
  ];
  return useRoutes(routes);
};

export default RouteConfig;
