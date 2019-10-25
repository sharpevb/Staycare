import React, { Component } from "react";
import ReportpageRO from "../components/DailyReport/ReportpageRO";

class DailyReport extends Component {
  state = {
    memberId: 0
  };

  // If provider, able to edit
  // If parent, unable to edit

  componentDidMount() {
    //this will get the parameter passed on the command line, which will be the memberId
    const { match: { params } } = this.props;
    console.log('params.member id ' + params.memberId)
    const paramId = parseInt(params.memberId);
    sessionStorage.setItem("memberId", paramId);
    this.setState({ memberId: paramId }, () => {
      
      console.log('member id ' + this.state.memberId);
      
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    window.location.reload();
  }

  render() {
    const loggedIn = parseInt(sessionStorage.getItem("familyId"));
    //if family id = 0 then it's a provider   
    if (loggedIn === 0 ) {
      return <ReportpageRO 
              memberId={this.state.memberId}
              /> // Will change to Reportpage
    }
    //then member who has logged in.
    else if (loggedIn > 0) {
      return <ReportpageRO
      memberId={this.state.memberId}
       /> // Will change to ReportpageRO
    }
    //they have not logged in, so send them to login screen
    else {
      window.location.replace("/login");
    }
  }
}

export default DailyReport;