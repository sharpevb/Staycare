import React, { Component } from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportCard from "./ReportCard/ReportCard";
import NavProfile from "../NavProfile/NavProfile";

class Reportpage extends Component {



    render() {
        return (
            <div>
                <NavProfile />
                <div className="container-fluid">
                    <ReportHeader />
                    <ReportCard />
                </div>
            </div>
        )
    }




}

export default Reportpage;