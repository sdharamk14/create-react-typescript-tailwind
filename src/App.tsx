// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RouteConfig from "./RouteConfig";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <RouteConfig/>
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} element={route.routes} />
      )}
    />
  );
}

export default App;
