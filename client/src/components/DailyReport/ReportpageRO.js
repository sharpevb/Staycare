import React, { Component } from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportCardRO from "./ReportCard/ReportCardRO";
import NavProfile from "../NavProfile/NavProfile";

class ReportpageRO extends Component {



    render() {
        return (
            <div>
                <NavProfile />
                <div className="container-fluid">
                    <ReportHeader />
                    <ReportCardRO />
                </div>
            </div>
        )
    }




}

export default ReportpageRO;