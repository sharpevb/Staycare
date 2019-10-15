import React, { Component } from "react";
import "./style.css";


class DailyReport extends Component { 



    
}


function ReportHeader(props) {


    return (
        <div>

            <div className="header-info">
                <div className="container-fluid">
                    <div className="row" id="banner-row">

                        <div className="col-2">
                            <img className="image" src="https://via.placeholder.com/150"></img>
                        </div>
                        <div className="col">
                            <h1>name:{props.name}</h1>
                            <div className="row">
                                <div className="col-4">
                                    <p>Date of Birth: {props.dob}</p>
                                </div>
                                <div className="col-6">
                                    <p>Parent/Guardian(s): "Parent Name 1" and "Parent Name 2"</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <p>Allergies: Lactose Intolerant</p>
                                </div>
                                <div className="col-3">
                                    <p>Phone: 000-000-0000</p>
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