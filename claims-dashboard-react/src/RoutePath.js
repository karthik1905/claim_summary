import React from "react";
import App from "./App";
import Claims from "./Claims";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditClaim from './EditClaim';
import ReviewClaimCard from "./ReviewClaimCard";

const RoutePath = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/claims" component={Claims} />
          <Route exact path="/add" component={EditClaim} />
          <Route exact path="/add/:id" component={EditClaim} />
          <Route exact path="/review" component={ReviewClaimCard} />
        </Switch>
      </Router>
  );
};

export default RoutePath;
