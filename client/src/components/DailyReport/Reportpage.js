import React, { Component } from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportCard from "./ReportCard/ReportCard";
import NavProfile from "../NavProfile/NavProfile";

class Reportpage extends Component {

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
                    memberId={this.state.memberId} />
                    <ReportCard 
                    memberId={this.state.memberId}
                    />
                </div>
            </div>
        )
    }




}

export default Reportpage;