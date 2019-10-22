import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";


class DRtitle extends Component {

    state = {
        activity: {
            activitydate: "",
            
        }
    }

    componentDidMount() {
        API.findActivityById(1)
        .then(res => {
            let activity = {
                memberId: 3,
                activitydate: res.data.activitydate,
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
                <p>{this.state.activity.activitydate}</p>
            </div>
        </div>

    )  
    }
    

}


export default DRtitle;