import React, { Component } from "react";
import API from "../../../../utils/API";


class DRfood extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activity4: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            },
            activity5: {
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

        API.findActivityById(4)
        .then(res => {
            let activity4 = {
                memberId: 3,
                activitycode: res.data.activitycode,
                activitydate: res.data.activitydate,
                time: res.data.time,
                result1: res.data.result1,
                result2: res.data.result2,
            };
            this.setState({ activity4: activity4 });
            console.log(activity4);


        })
        .catch(err => console.log(err));
       
        
        API.findActivityById(5)
        .then(res => {
            let activity5 = {
                memberId: 3,
                activitycode: res.data.activitycode,
                activitydate: res.data.activitydate,
                time: res.data.time,
                result1: res.data.result1,
                result2: res.data.result2,
            };
            this.setState({ activity5: activity5 });
            console.log(activity5);


        })
        .catch(err => console.log(err));
      

    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="container">
                    <div className="col-3">
                        <label>Food: </label>
                    </div>

                    {/* Displays from db  */}
                    <div className="col-7">
                        <p>Time: {this.state.activity4.time} || Type: {this.state.activity4.result1} || Amount: {this.state.activity4.result2}</p>
                        <p>Time: {this.state.activity5.time} || Type: {this.state.activity5.result1} || Amount: {this.state.activity5.result2}</p>
                        
                    </div>
                    <br />
                </div>
            </div>
        )
    }

}

export default DRfood;