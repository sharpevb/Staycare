import React, { Component } from "react";
//import { Link } from "react-router-dom";
import ReportCard from "../components/DailyReport/ReportCard/ReportCard";
import ReportCardRO from "../components/DailyReport/ReportCard/ReportCardRO";
//import API from "../utils/API";
import Reportpage from "../components/DailyReport/Reportpage";

class DailyReport extends Component {

componentDidMount() {

  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  render() {
    const loggedIn = parseInt(sessionStorage.getItem("familyId"));
    //if family id = 0 then it's a provider   
    if (loggedIn === 0) {
      return <Reportpage /> // Will change to Reportpage
    }
    //then member who has logged in.
    else if (loggedIn > 0) {
      return <ReportCardRO /> // Will change to ReportpageRO
    }
    //they have not logged in, so send them to login screen
    else {
      window.location.replace("/login");
    }
  }
}

export default DailyReport;