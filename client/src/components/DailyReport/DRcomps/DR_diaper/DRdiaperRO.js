import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";


class DRdiaper extends Component {


    constructor() {
        super();

        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            activity: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            }
        }

    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     alert(`You chose the ${this.state.result1} pizza.`);
    //   }

    // handleChange(event) {
    //     this.setState({
    //       result1: event.target.value
    //     });
    //   }

    addBathroom() {
        // let bathbutton = document.getElementById("bathbutton");
        // bathbutton.addEventListener("click", function() {
        //     let bathroom = document.getElementById("bathroom");
        //     let clone1 = bathroom.firstElementChild.cloneNode(true);
        //     let clone = bathroom.lastElementChild.cloneNode(true);
        //     bathroom.appendChild(clone1);
        //     bathroom.appendChild(clone);

        // })

        var itm = document.getElementById("bathroom").childNodes;
        for (var i = 0; i < itm.length; i++) {
            console.log(itm[i]);
            var cln = itm[i].cloneNode(true);
            document.getElementById("bathroom1").lastChild.appendChild(cln);
        }
    }

    //  Attempt at delete functionality

    // deleteBathroom() {
    //         var itm = document.getElementById("bathroom").childNodes;
    //         for (var i = 0; i < itm.length; i--) {
    //             console.log(itm[i]);
    //             var cln = itm[i].cloneNode(true);
    //             document.getElementById("bathroom1").lastChild.appendChild(cln);
    //         }

    // }

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

    //API.updateActivity(id, memberData)


    //{this.state.activity.time}

    render() {
        return (
            <div className="row" id="container">
                <div className="col-2">
                    <label>Bathroom: </label>
                </div>
                
                {/* Read Only */}
                <div className="row" id="bathroom">
                    <div className="col-3">
                        <p>{this.state.activity.time}</p>
                    </div>

                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inlineRadio1"
                                value="Wet"
                                onChange={this.handleChange}
                                disabled
                                
                            />
                            <label className="form-check-label">
                                Wet </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inlineRadio2"
                                value="BM"
                                onChange={this.handleChange}
                                checked  />
                            <label className="form-check-label">BM</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inlineRadio3"
                                value="Wet/BM"
                                onChange={this.handleChange}
                                disabled
                                 />
                            <label className="form-check-label">Wet/BM</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inlineRadio4"
                                value="Dry"
                                onChange={this.handleChange}
                                disabled
                                 />
                            <label className="form-check-label">Dry</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inlineRadio5"
                                value="Diarrhea"
                                onChange={this.handleChange}
                                disabled
                                 />
                            <label className="form-check-label">Diarrhea</label>
                        </div>
                    </div>
                </div>

                

            </div>
        )
    }



}


export default DRdiaper;