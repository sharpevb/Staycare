import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import DailyReport from "./pages/DailyReport";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import NavHome from "../src/components/NavHome/NavHome";

function App() {
  return (
    <Router>
      <div>
        <NavHome />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dailyreport" component={DailyReport} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
