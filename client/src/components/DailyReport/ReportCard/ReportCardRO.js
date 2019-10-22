import React, { Component } from "react";
import DRtitleRO from "../DRcomps/DR_title/DRtitleRO";
import DRdiaperRO from "../DRcomps/DR_diaper/DRdiaperRO";
import DRfoodRO from "../DRcomps/DR_food/DRfoodRO";
import DRsleepRO from "../DRcomps/DR_sleep/DRsleepRO";
import DRmedsRO from "../DRcomps/DR_meds/DRmedsRO";
import DRnotesRO from "../DRcomps/DR_notes/DRnotesRO";
import "./style.css";
import ReportHeader from "../ReportHeader/ReportHeader";
import NavProfile from "../../NavProfile/NavProfile";


class ReportCardRO extends Component {

    
state = {
    activity: {
        memberId: "",
        activitydate: "",
        activitycode: "",
        time: "",
        result1: "",
        result2: ""
    },
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
}


    render() {
        return (
            <div>
                <NavProfile />
            
            <div className="container-fluid" id="daily-report">
                <ReportHeader />
                <DRtitleRO />
                <div className="row">
                            <div className="col-12">
                                <DRdiaperRO />
                            </div>

                            <div className="col-12">
                                <DRfoodRO />
                            </div>                    

                            <div className="col-4">
                                <DRsleepRO />
                            </div>

                            <div className="col-6">
                                <DRmedsRO />
                            </div>

                            <div className="col col-6">
                                <DRnotesRO />
                            </div>
                </div>
            </div>
            </div>
        )
    }



}

export default ReportCardRO;