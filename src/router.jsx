import React from "react";
import { Switch, Route } from "react-router-dom";
import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import Page_3 from "./Page_3";
import Page_4 from "./Page_4";
import Page_5 from "./Page_5";
import Help from "./help";
import Help2 from "./help2";
const Routers = () => {
  return (
    <Switch>
      <Route path="/" component={Page_1} exact />
      <Route path="/Page_1" component={Page_1} exact />
      <Route path="/Page_2" component={Page_2} exact />
      <Route path="/Page_3" component={Page_3} exact />
      <Route path="/Page_4" component={Page_4} exact />
      <Route path="/Page_5" component={Page_5} exact />
      <Route path="/help" component={Help} exact />
      <Route path="/help2" component={Help2} exact />
    </Switch>
  );
};
export default Routers;
