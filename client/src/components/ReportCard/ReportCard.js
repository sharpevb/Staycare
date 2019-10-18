import React, { Component } from "react";
import DRtitle from "../DR_title/DRtitle";
import DRdiaper from "../DR_diaper/DRdiaper";
import DRfood from "../DR_food/DRfood";
import API from "../../utils/API";
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
        console.log(activity);
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


    // onFocus={this.onFocus}
// onBlur={this.onBlur}

// onBlur() {
//     API.updateActivity()
// }

    render() {
        return (
            <div className="container-fluid" id="daily-report">
                <DRtitle />
                <div className="row">
                    {/* <form> */}
                        {/* <label>Diaper Change:</label><input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers"></input> <input id="" name="diapers" placeholder="time"></input>  */}
                        <div className="col-12">
                            <DRdiaper />
                        </div>

                        <div className="col-12">
                            <DRfood />
                        </div>
                        

                        <div className="col">
                            <label>Sleep: </label> <input id="" name="diapers" placeholder="time"></input> to <input id="" name="diapers" placeholder="time"></input>
                        </div>

                        <div className="col">
                            <label>Medications administered: </label> <input id="" name="meds"></input>
                        </div>

                        <div className="col">
                            <label>Incidents: </label> <input id="" name="incidents"></input>
                        </div>
                    {/* </form> */}
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