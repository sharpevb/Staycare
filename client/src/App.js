import React, { Component } from "react";
import "./App.css";
import Login from "./pages/Login";
import NavHome from "../src/components/NavHome/NavHome"
//import UpdateDailyLog from "../src/pages/UpdateDailyLog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHome />
        <Login />
        
      </div>
    );
  }
}

export default App;
