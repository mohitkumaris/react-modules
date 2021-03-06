import React from "react";

const Users = () => <div>Users Module</div>;

export default {
  routeProps: {
    // This gets passed straight to react-router
    path: "/users", // Where the module lives in the nav hierarchy
    component: Users, // The actual component itself
  },
  name: "Users", // The name of the module
};
