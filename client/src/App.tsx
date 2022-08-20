import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Layout>
  );
}
