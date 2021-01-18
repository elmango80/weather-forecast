import React from "react";

const Favorites = (props) => <h1>Favoritos</h1>;

const HomePage = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "views/home")
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
