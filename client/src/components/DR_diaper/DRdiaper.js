import React from "react";
import "./style.css";


function DRdiaper(props) {


    return (
        <div className="row" id="container">
            <div className="col-1">
                <label>Bathroom:</label>
                <p>Add </p>
            </div>

            <div className="col col-1">
                <input className="form-control" name="diapers" placeholder="time"></input>
            </div>

            <div className="col col-6">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">
                        Wet </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">BM</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label className="form-check-label" for="inlineRadio3">Wet/BM</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label className="form-check-label" for="inlineRadio4">Dry</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label className="form-check-label" for="inlineRadio5">Diarrhea</label>
                </div>
            </div>




        </div>


    )


}


export default DRdiaper;