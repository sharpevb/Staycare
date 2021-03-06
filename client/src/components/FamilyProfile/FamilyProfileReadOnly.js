import React from "react";

function FamilyProfileReadOnly(props) {
  return (
    <div>
    <div className="card-body" id="familyProfileRO">
      
        {/*<img alt={props.name} src={props.image} />*/}

      <div className="content">
        <ul>
          <li>
            <strong>Family Name: </strong> {props.familyname}
          </li>
          <li>
            <strong>Family ID: </strong> {props.id}
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
      </div>
      </div>
    </div>
  );
}

export default FamilyProfileReadOnly;