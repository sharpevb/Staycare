import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import AddBtn from "./components/AddBtn"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AddBtn />
      </div>
    );
  }
}

export default App;
