import React from "react";
import { Switch, Route } from "react-router";
import { HomePageComponent } from "./pages/HomePageComponent";

export const App = () => {
  return (
    <Switch>
      <Route exect path="/" component={HomePageComponent} />
    </Switch>
  );
};
