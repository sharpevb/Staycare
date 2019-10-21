import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";

class DRnotes extends Component {

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


        API.findActivityById(7)
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
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="note-box">Notes</span>
                </div>
                <span className="form-control" id="text-box"></span>
            </div>
        </div>
    )   
    }
    



}

export default DRnotes;