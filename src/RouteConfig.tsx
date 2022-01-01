import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Author from "./pages/aspirant/Author";
import Blog from "./pages/aspirant/Blog";
import Blogs from "./pages/aspirant/Blogs";
import CreateBlog from "./pages/aspirant/CreateBlog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

interface childRouteInterface {
  path: string;
  element: JSX.Element;
}

interface routesInterface {
  path: string;
  element: JSX.Element;
  children?: childRouteInterface[];
}

const RouteConfig = () => {
  const routes: routesInterface[] = [
    {
      path: "/",
      element: (
        <>
          <Login />
          <Outlet />
        </>
      ),
    },
    {
      path: "login",
      element: (
        <>
          <Login />
          <Outlet />
        </>
      ),
    },
    {
      path: "signup",
      element: (
        <>
          <SignUp />
          <Outlet />
        </>
      ),
    },
    {
      path: "blogs",
      element: <Blogs />,
      // children: [{ path: ":jobId", element: <Blog /> }],
    },
    {
      path: "blog/:id",
      element: <Blog />,
    },
    {
      path: "author/:authorName",
      element: <Author />,
    },
    {
      path: "create",
      element: <CreateBlog />,
    },
  ];
  return useRoutes(routes);
};

export default RouteConfig;
