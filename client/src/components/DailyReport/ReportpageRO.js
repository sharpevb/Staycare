import React, { Component } from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportCardRO from "./ReportCard/ReportCardRO";
import NavProfile from "../NavProfile/NavProfile";

class ReportpageRO extends Component {
    state = {
        memberId: 0
      };

      componentDidMount() {
          
        this.setState({ memberId: this.props.memberId }, () => {
      
            console.log('member id ' + this.state.memberId);
          });
      }


    render() {
        return (
            <div>
                <NavProfile />
                <div className="container-fluid">
                    <ReportHeader
                    memberId={this.state.memberId}
                     />
                    <ReportCardRO
                    memberId={this.state.memberId}
                     />
                </div>
            </div>
        )
    }




}

export default ReportpageRO;