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
}

componentDidMount() {
    // Diaper
    API.findActivityByChildId(3)
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
    //.catch(err => console.log(err));
    // API.findActivityByChildId(3)
    // .then(res => {
    //     let id = {
    //         memberId: 3,
    //         activitycode: res.data.activitycode,
    //         activitydate: "2019-10-09",
    //         time: res.data.time,
    //         result1: res.data.result1,
    //         result2: res.data.result2
    //     };
    //     this.setState({id: id});
    //     console.log(id);
    // })



};


    render() {
        return (
            <div className="container-fluid" id="daily-report">
                <DRtitle />
                <div className="row">
                    <div className="col">
                        <div className="row">
                        {/* <label>Diaper Change:</label><input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers"></input> <input id="" name="diapers" placeholder="time"></input>  */}
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

                            <div className="col col-4">
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






// handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });

    // }


    /* <div>
        <form>
        <input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers">Diaper Change: </input>
        <input id="" value={this.state.feedings} onChange={this.handleInputChange} name="feedings">Feeding: </input>
        <input id="" value={this.state.naps} onChange={this.handleInputChange} name="naps">Naps: </input>
        <input id="" value={this.state.meds} onChange={this.handleInputChange} name="meds">Medications administered: </input>
        <input id="" value={this.state.incidents} onChange={this.handleInputChange} name="incidents">Incidents: </input>
        </form>
         
      </div> */