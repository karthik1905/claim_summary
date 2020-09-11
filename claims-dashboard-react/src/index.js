import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Claims from './Claims';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditClaim from "./EditClaim";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/claims" component={Claims} />
      <Route exact path="/add" component={EditClaim}/>
      <Route exact path="/add/:id" component={EditClaim}/>
    </Switch>
  </Router>,
  document.getElementById("App")
);

serviceWorker.unregister();
