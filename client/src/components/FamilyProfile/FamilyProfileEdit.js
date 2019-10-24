import React from "react";
import "./style.css";

function FamilyProfileEdit(props) {
  return (
    <div>
      <div className="card-body" id="familyProfileEdit">
        <div className="card-body">
          {/* <p>
            <strong>Edit:</strong>{" "}
            <input
              value={props.familyname}
              name="name"
              onChange={props.handleInputChangeFamily}
            />
          </p> */}

          <p>
            <strong>Family Name:</strong>{" "}
            <p name="name"
              onChange={props.handleInputChangeFamily}>
              {props.familyname}
              </p>
            
          </p>
          {/* <p>
            <strong>Family ID:</strong>{" "}
            <input
              value={props.id}
              name="id"
              onChange={props.handleInputChangeFamily}
            />
          </p> */}

          {/* <p>
            <strong>Primary Phone:</strong>{" "}
            <p name="primaryphone"
              onChange={props.handleInputChangeFamily}>
              {props.primaryphone}
              
            </p>
          </p> */}
          <p>
            <strong>Primary Address:</strong>{" "}
            <p name="address1"
              onChange={props.handleInputChangeFamily}>
              {props.address1}
              <p>{props.address2}</p>
              </p>
          </p>
          {/* <p>
            <strong>Secondary Address:</strong>{" "}
            <input
              value={props.address2}
              name="address2"
              onChange={props.handleInputChangeFamily}
            />
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default FamilyProfileEdit;
