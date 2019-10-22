import React from "react";
import "./style.css";

function FamilyProfileEdit(props) {
  return (
    <div>
      <div className="card-body" id="familyProfileEdit">
        <div className="card-body">
          <p>
            <strong>Edit:</strong>{" "}
            <input
              value={props.familyname}
              name="name"
              onChange={props.handleInputChangeFamily}
            />
          </p>

          <p>
            <strong>Family Name:</strong>{" "}
            <input
              value={props.familyname}
              name="name"
              onChange={props.handleInputChangeFamily}
            />
          </p>
          <p>
            <strong>Family ID:</strong>{" "}
            <input
              value={props.id}
              name="id"
              onChange={props.handleInputChangeFamily}
            />
          </p>

          <p>
            <strong>Primary Phone:</strong>{" "}
            <input
              value={props.primaryphone}
              name="primaryphone"
              onChange={props.handleInputChangeFamily}
            />
          </p>
          <p>
            <strong>Primary Address:</strong>{" "}
            <input
              value={props.address1}
              name="address1"
              onChange={props.handleInputChangeFamily}
            />
          </p>
          <p>
            <strong>Secondary Address:</strong>{" "}
            <input
              value={props.address2}
              name="address2"
              onChange={props.handleInputChangeFamily}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FamilyProfileEdit;
