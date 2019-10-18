import React from "react";
import "./style.css";



function DRfood() {

    return (
        <div className="row" id="container">
            <div className="col-2">
                <label>Food: </label>
                <p><button className="w3-button w3-circle w3-green w3-small">+</button> <button className="w3-button w3-circle w3-red w3-small">-</button></p>
             </div>   

             <div className="col-3">
                <select className="form-control form-control-sm" id="meals">
                    <option>Meals</option>
                    <option>This is a long food meal</option>
                    <option>Food2</option>
                </select>
            </div>

            <div className="col col-6">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">
                        All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">Some</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label className="form-check-label" for="inlineRadio3">None</label>
                </div>
            </div>

        </div>
    )

}

export default DRfood;