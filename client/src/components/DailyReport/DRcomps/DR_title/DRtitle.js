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