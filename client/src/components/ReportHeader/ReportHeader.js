import React, { Component } from "react";
import "./style.css";


// class DailyReport extends Component { 
    
// }


function ReportHeader(props) {


    return (
        <div>
            <div className="header-info">
                <div className="container-fluid">
                    <div className="row" id="banner-row">

                        <div className="col-2">
                            <img className="image" src={props.image}></img>
                        </div>
                        <div className="col">
                            <h1>name:{props.name}</h1>
                            <div className="row">
                                <div className="col-4">
                                    <p>Date of Birth: {props.dob}</p>
                                </div>
                                <div className="col-6">
                                    <p>Parent/Guardian(s): {props.member}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <p>Allergies: {props.allergies}</p>
                                </div>
                                <div className="col-3">
                                    <p>Phone: {props.primaryphone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ReportHeader;