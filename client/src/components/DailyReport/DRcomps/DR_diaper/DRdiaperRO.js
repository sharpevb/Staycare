import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";


class DRdiaper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activity1: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            },
            activity2: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            },
            activity3: {
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
        const memberId = parseInt(sessionStorage.getItem("memberId"), () => {

            this.setState({ memberId: memberId }, () => {

                console.log('member id ' + this.state.memberId);
            });
        });

        API.findActivityById(1)
            .then(res => {
                let activity1 = {
                    memberId: res.data.MemberId,
                    activitycode: res.data.activitycode,
                    activitydate: res.data.activitydate,
                    time: res.data.time,
                    result1: res.data.result1,
                    result2: res.data.result2,
                };
                this.setState({ activity1: activity1 });


            })
            .catch(err => console.log(err));


        API.findActivityById(2)
            .then(res => {
                let activity2 = {
                    memberId: res.data.MemberId,
                    activitycode: res.data.activitycode,
                    activitydate: res.data.activitydate,
                    time: res.data.time,
                    result1: res.data.result1,
                    result2: res.data.result2,
                };
                this.setState({ activity2: activity2 });


            })
            .catch(err => console.log(err));


        API.findActivityById(3)
            .then(res => {
                let activity3 = {
                    memberId: res.data.MemberId,
                    activitycode: res.data.activitycode,
                    activitydate: res.data.activitydate,
                    time: res.data.time,
                    result1: res.data.result1,
                    result2: res.data.result2,
                };
                this.setState({ activity3: activity3 });


            })
            .catch(err => console.log(err));

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="container">
                    <div className="col-3">
                        <label>Bathroom: </label>
                    </div>

                    {/* Displays from db  */}
                    <div className="col-7">
                        <p>Time: {this.state.activity1.time} || Type: {this.state.activity1.result1}</p>
                        <p>Time: {this.state.activity2.time} ||  Type: {this.state.activity2.result1}</p>
                        <p>Time: {this.state.activity3.time} ||  Type: {this.state.activity3.result1}</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    }

}

export default DRdiaper;