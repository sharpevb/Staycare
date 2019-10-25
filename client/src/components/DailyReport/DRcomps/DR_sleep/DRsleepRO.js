import React, { Component } from "react";
import API from "../../../../utils/API"

//const id = parseInt(sessionStorage.getItem("memberId"));

class DRsleep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activity6: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            },

        }

    }

    componentDidMount() {
        API.findActivityById(6)
        .then(res => {
            let activity6 = {
                memberId: res.data.MemberId,
                activitycode: res.data.activitycode,
                activitydate: res.data.activitydate,
                time: res.data.time,
                result1: res.data.result1,
                result2: res.data.result2,
            };
            this.setState({ activity6: activity6 });


        })
        .catch(err => console.log(err));
    }

render() {
    return (
        <div className="container-fluid">
        <div className="row" id="container">
            <div className="col-3">
                <label>Sleep: </label>
            </div>
            <div className="col-7">
                <p>Time: {this.state.activity6.time} to {this.state.activity6.result1}</p>
            </div>
        </div>
        </div>
    )
}
    

}


export default DRsleep;