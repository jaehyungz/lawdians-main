import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Main from "../pages/Main/Main";
import Terms from "../pages/Terms/Terms";
import Useterms from "../pages/Terms/Useterms";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/terms" component={Terms} />
        <Route path="/terms/useterms" component={Useterms} />

        <Redirect form="*" to="/" />
      </Switch>
    </>
  </Router>
);
