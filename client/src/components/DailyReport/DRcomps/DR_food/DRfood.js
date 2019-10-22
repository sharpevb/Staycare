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
            <div className="container-fluid">
                <div className="row" id="container">
                    <p>
                        <button onClick={this.addFood} className="w3-button w3-green w3-small">+</button>
                    </p>
                    <div className="col-3">
                        <label>Food: </label>
                    </div>

                    {/* Display none but contains into */}
                    <div className="row" id="food" style={this.styles.div}>
                        <div className="col">
                            <input className="form-control" placeholder="PB&J"></input>
                        </div>
                        <br />
                        <div className="col">
                            <label>Amount: <span id="examples">All, Some, None</span></label> <input className="form-control" />
                        </div>
                    </div>

                    {/* Append new entry */}
                    <div className="row" id="food1">
                        <div className="form-check">
                            <div className="col">
                                <input className="form-control" placeholder="PB&J" required></input>
                            </div>
                            <br />
                            <div className="col">
                                <label>Amount: <span id="examples">All, Some, None</span></label> <input className="form-control" />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DRfood;