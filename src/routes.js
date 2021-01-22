import React from "react";

const HomePage = React.lazy(() =>
  import(/*webpackChunkName: "HomePAge"*/ "pages/homepage")
);

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: HomePage,
  },
];

export default routes;
