import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";


class DRtitle extends Component {

    state = {
        activity: {
            memberId: "",
            activitydate: "",
            activitycode: "",
            time: "",
            result1: "",
            result2: "",
        }
    }

    componentDidMount() {


        API.findActivityById(1)
            .then(res => {
                let activity = {
                    memberId: 3,
                    activitycode: res.data.activitycode,
                    activitydate: res.data.activitydate,
                    time: res.data.time,
                    result1: res.data.result1,
                    result2: res.data.result2
                };
                this.setState({ activity: activity });
                console.log(activity);

                
            })
            .catch(err => console.log(err));
    }
    render() {
      return (

        <div className="row" id="container">
            <div className="col-3" id="dr-title">
                <h1>Daily Report</h1>
                <input type="date" className="form-control"></input>
            </div>
        </div>

    )  
    }
    

}


export default DRtitle;