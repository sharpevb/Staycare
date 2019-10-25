import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";


class DRdiaper extends Component {

    styles = {
        div: {
            display: "none"
        }
    }

    constructor(props) {
        super(props);

        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            activity: {
                memberId: "",
                activitydate: "",
                activitycode: "",
                time: "",
                result1: "",
                result2: ""
            },

            selectedOption: ""


        }

    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

    }
 
    addBathroom() {
        var itm = document.getElementById("bathroom").childNodes;
        for (var i = 0; i < itm.length; i++) {
            var cln = itm[i].cloneNode(true);
            document.getElementById("bathroom1").lastChild.appendChild(cln);
        }
    }

    componentDidMount() {


        API.findActivityById(1)
            .then(res => {
                let activity = {
                    memberId: res.data.memberId,
                    activitycode: res.data.activitycode,
                    activitydate: res.data.activitydate,
                    time: res.data.time,
                    selectedOption: res.data.result1,
                    result2: res.data.result2,
                };
                this.setState({ activity: activity });


            })
            .catch(err => console.log(err));
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="container">
                    <p>
                        <button onClick={this.addBathroom} className="w3-button w3-green w3-small">+</button>
                    </p>
                    <div className="col-3">
                        <label>Bathroom: </label>
                    </div>

                    {/* Display none but contains info */}
                    <div className="row" id="bathroom" style={this.styles.div}>
                        <div className="col">
                            <input className="form-control" placeholder="13:00"></input>
                        </div>
                        <br />
                        <div className="col">
                            <label>Type: <span id="examples">Wet, Dry, BM, Wet/BM, Diarrhea</span></label> <input className="form-control" />
                        </div>
                    </div>

                    {/* Append new entry */}
                    <div className="row" id="bathroom1">
                        <div className="form-check">
                            <div className="col">
                                <input className="form-control" placeholder="13:00"></input>
                            </div>
                            <br />
                            <div className="col">
                                <label>Type: <span id="examples">Wet, Dry, BM, Wet/BM, Diarrhea</span></label> <input className="form-control" />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DRdiaper;