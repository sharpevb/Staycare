import React, { Component } from "react"
import NavProfile from "../components/NavProfile/NavProfile";
import ReportHeader from "../components/ReportHeader/ReportHeader";
import ReportCard from "../components/ReportCard/ReportCard";
import API from "../utils/API";
import Footer from "../components/Footer/Footer";

class DailyReport extends Component {
  state = {
    dailyreport: {
    diapers: "",
    feedings: "",
    naps: "",
    meds: "",
    incidents: "",
    children: [],
    error: "",
    id: ""
    },
    reportheader: {
      id: "",
      name: "",
      dob: "",
      allergies: "",
      medication: "",
      primaryphone: ""
    }
  }

// If provider, able to edit
// If parent, unable to edit

componentDidMount() {
  API.findFamilyById(1)
  .then(res => {
    let reportheader = {
      id: res.data.id,
      name: res.data.name,
      dob: res.data.dob,
      allergies: res.data.allergies,
      medication: res.data.medication,
      primaryphone: res.data.primaryphone
    };
    this.setState({reportheader: reportheader})
  })
  .catch(err => console.log(err));
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
                    <ReportHeader
                     name={this.state.reportheader.name}/>
                    <ReportCard />
                </div>
                <Footer />
            </div>
    )
  }
}

export default DailyReport;