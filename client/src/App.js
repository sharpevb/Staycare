import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import NoMatch from "./pages/UpdateDailyLog";
import NavHome from "../src/components/NavHome/NavHome";
import Profile from "../src/pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <NavHome />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;