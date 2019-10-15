import React, { Component } from "react"
import NavProfile from "../components/NavProfile/NavProfile";
import ReportHeader from "../components/ReportHeader/ReportHeader";
import ReportCard from "../components/ReportCard/ReportCard";

class DailyReport extends Component {
  state = {
    diapers: "",
    feedings: "",
    naps: "",
    meds: "",
    incidents: ""
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
    return (
      <div className="header-info">
                <NavProfile />
                <div className="container-fluid">
                    <ReportHeader />
                    <ReportCard 
                    />
                </div>
            </div>
    )
  }
}

export default DailyReport;