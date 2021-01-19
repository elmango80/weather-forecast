import React from "react";

const Favorites = React.lazy(() =>
  import(/*webpackChunkName: "Favorites"*/ "views/favorites")
);

const HomePage = React.lazy(() =>
  import(/*webpackChunkName: "HomePAge"*/ "views/homepage")
);

const routes = [
  {
    path: "/favoritos",
    name: "Favoritos",
    exact: true,
    component: Favorites,
  },
  {
    path: "/",
    name: "Home",
    exact: true,
    component: HomePage,
  },
];

export default routes;
