import React, { Component } from "react";
//import { Link } from "react-router-dom";
import NavProfile from "../components/NavProfile/NavProfile";
import ReportHeader from "../components/DailyReport/ReportHeader/ReportHeader";
//import ReportCard from "../components/DailyReport/ReportCard/ReportCard";
import ReportCardRO from "../components/DailyReport/ReportCard/ReportCardRO";
import API from "../utils/API";

class DailyReport extends Component {

  
  // If provider, able to edit
  // If parent, unable to edit

componentDidMount() {
const loggedIn = parseInt(sessionStorage.getItem("familyId"));
//if family id = 0 then it's a provider   
if (loggedIn === 0) {
  API.findActivityByChildId(3) //
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data);
      }
      

    })
    .catch(err => this.setState({ error: err.name }))
}
//then member who has logged in.
else if (loggedIn > 0) {
  API.findMembersByFamily(loggedIn) //
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data);
      }
      // else {
      //   return (
      //     // <ReportCardRO />
      //   )
      // } 
        
      

    })
    .catch(err => this.setState({ error: err.name }))
}
//they have not logged in, so send them to login screen
else {
  window.location.replace("/login");
}

    
// const { data } = this.props.location
// <Link
// to={{
//   pathname: "/",
//   data: data
// }}
// ></Link>


    // API.findFamilyById(1)
    // .then(res => {
    //   let reportheader = {
    //     id: res.data.id,
    //     name: res.data.name,
    //     dob: res.data.dob,
    //     allergies: res.data.allergies,
    //     medication: res.data.medication,
    //     primaryphone: res.data.primaryphone
    //   };
    //   this.setState({reportheader: reportheader})
    // })
    // .catch(err => console.log(err));
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
          <form><ReportCardRO /></form>
        </div>
      </div>
    )
  }
}

export default DailyReport;