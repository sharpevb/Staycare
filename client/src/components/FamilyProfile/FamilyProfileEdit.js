import React from "react";
import "./style.css";

function FamilyProfileEdit(props) {
  return (
    <div>
      <div className="card-body" id="familyProfileEdit">
        <div className="card-body">

          <div>
           <p name="name"onChange={props.handleInputChangeFamily}> <strong>Family Name: </strong>   {props.familyname}</p> 
           <p name="address1"onChange={props.handleInputChangeFamily}> <strong>Primary Address: </strong>   {props.address1}</p>     
          </div>

        </div>
      </div>
    </div>
  );
}

export default FamilyProfileEdit;
