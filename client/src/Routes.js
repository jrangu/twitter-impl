import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Timeline from "./Timeline"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/timeline" exact component={Timeline} />
    </Switch>
  );
}