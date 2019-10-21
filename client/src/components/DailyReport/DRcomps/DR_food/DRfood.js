import React, { Component } from "react";
import "./style.css";


class DRfood extends Component {

    styles = {
        div: {
            display: "none"
        }
    }

    addFood() {
        var itm = document.getElementById("food").childNodes;
        for (var i = 0; i < itm.length; i++) {
            console.log(itm[i]);
            var cln = itm[i].cloneNode(true);
            document.getElementById("food1").lastChild.appendChild(cln);
        }


    }





    render() {
        return (
            <div className="row" id="container">
                <p>
                    <button onClick={this.addFood} className="w3-button w3-circle w3-green w3-small" id="foodbutton">+</button> 
                    {/* <button className="w3-button w3-circle w3-red w3-small">-</button> */}
                </p>
                <div className="col-1">
                    <label>Food: </label>
                </div>
                {/* Display none but contains into */}
                <div className="row" id="food" style={this.styles.div}>
                    <div className="col-5">
                        <input className="form-control" required></input>
                    </div>

                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">
                                All</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Some</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label">None</label>
                        </div>
                    </div>
                </div>

                {/* Append new entry */}
                <div className="row" id="food1">
                    <div className="col-4">
                        <input className="form-control" placeholder="PB&J" required></input>
                    </div>

                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">
                                All</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Some</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label">None</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default DRfood;