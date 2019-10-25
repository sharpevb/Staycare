import React, { Component } from "react";
import DRtitle from "../DRcomps/DR_title/DRtitle";
import DRdiaper from "../DRcomps/DR_diaper/DRdiaper";
import DRfood from "../DRcomps/DR_food/DRfood";
import DRsleep from "../DRcomps/DR_sleep/DRsleep";
import DRmeds from "../DRcomps/DR_meds/DRmeds";
import DRnotes from "../DRcomps/DR_notes/DRnotes";
import DRbutton from "../DRcomps/DR_button/DRbutton";
import API from "../../../utils/API";
import "./style.css";


class ReportCard extends Component {

    
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
        provider: {
            name: "",
        }
}

componentDidMount() {
    const memberId = parseInt(sessionStorage.getItem("memberId"), () => {
        console.log(memberId);
    });
    // Diaper
    API.findActivityByChildId(memberId)
    .then(res => {
        let activity = {
            id: res.data.id,
            activitycode: res.data.activitycode,
            time: res.data.time,
            result1: res.data.result1,
            result2: res.data.result2
        };
        this.setState({activity: activity});
        //console.log(activity);
    })
     API.findMembersByFamily(0)
    .then(res => {
        console.log(res)
        let provider = {
            name: res.data[0].name
        };
        this.setState({provider: provider});
    })
    .catch(err => console.log(err));

};


    render() {
        return (
            <div className="container-fluid" id="daily-report">
                <p id="provider-name"><strong>Provider: </strong>{this.state.provider.name}</p>
                
                <DRtitle />
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12">
                                <DRdiaper />
                            </div>

                            <div className="col-12">
                                <DRfood />
                            </div>                    

                            <div className="col-4">
                                <DRsleep />
                            </div>

                            <div className="col-6">
                                <DRmeds />
                            </div>

                            <div className="col col-6">
                                <DRnotes />
                                <DRbutton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}

export default ReportCard;