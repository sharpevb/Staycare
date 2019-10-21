import React from "react";

function FamilyProfileReadOnly(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Family Name:</strong> {props.familyname}
          </li>
          <li>
            <strong>Family ID:</strong> {props.id}
          </li>

          <li>
            <strong>Primary Phone:</strong> {props.primaryphone}
          </li>
          <li>
            <strong>Primary Address:</strong> {props.address1}
          </li>
          <li>
            <strong>Secondary Address:</strong> {props.address2}
          </li>
        </ul>
        <button onClick={() => props.deleteFamily(props.id)} className="remove">
          Delete Family
        </button>
      </div>
    </div>
  );
}

export default FamilyProfileReadOnly;
