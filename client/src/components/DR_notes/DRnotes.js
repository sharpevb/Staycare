import React from "react";
import "./style.css";



function DRnotes() {

    return (
        <div className="row" id="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="note-box" aria-label="With textarea">Notes</span>
                </div>
                <textarea className="form-control" id="text-box" aria-label="With textarea">Example</textarea>
            </div>
        </div>
    )



}

export default DRnotes;