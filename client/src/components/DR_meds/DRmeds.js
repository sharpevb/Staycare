import React from "react";
import "./style.css";


function DRmeds() {

    return (

        <div className="row" id="container">
            <div className="col-4" id="med-section">
            <label>Medications administered: </label> 
            </div>
            
            <div className="col-5">
            <input className="form-control" id="" name="meds"></input>
</div>
            <div className="col col-1">
            <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">
                        Administered</label>
                </div>
        </div>
            
        </div>
    )


}

export default DRmeds;