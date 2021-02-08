import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  browserHistroy,
} from "react-router-dom";

import Main from "../pages/Main/Main";
import Event from "../pages/Event/Event";
import EventDetail from "../pages/Event/EventDetail";
import Terms from "../pages/Terms/Terms";
import Useterms from "../pages/Terms/Useterms";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/event" exact component={Event} />
        <Route path="/event/:no" exact component={EventDetail} />
        <Route path="/terms" component={Terms} />
        <Route path="/terms/useterms" component={Useterms} />

        <Redirect form="*" to="/" />
      </Switch>
    </>
  </Router>
);
