import React from "react";
import "./style.css";

function ProfileCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Location:</strong> {props.id}
          </li>
          <li>
            <strong>Occupation:</strong> {props.membertype}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
          <li>
            <strong>dob:</strong> {props.dob}
          </li>
          <li>
            <strong>phone:</strong> {props.phone}
          </li>
          <li>
            <strong>textaddress:</strong> {props.textaddress}
          </li>
          <li>
            <strong>allergies:</strong> {props.allergies}
          </li>
          <li>
            <strong>medication:</strong> {props.medication}
          </li>
          <li>
            <strong>familyname:</strong> {props.familyname}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
