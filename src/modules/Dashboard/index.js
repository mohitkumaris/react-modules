import React from "react";
import Home from "./Home";

const Dashboard = () => {
  return (
    <div>
      Dashboard Module
      <Home />
    </div>
  );
};

export default {
  routeProps: {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  name: "Dashboard",
};
