import React from "react";

const Home = (props) => <h1>Home</h1>;
const Favorites = (props) => <h1>Favoritos</h1>;

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
    component: Home,
  },
];

export default routes;
