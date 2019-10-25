import React from "react";
import "./style.css";

function ProfileCardEdit(props) {
  return (
    <div>
      
        <div className="card-body" id="profileCardEditable">
        <img id="member-img" src={props.image} className="card-img-top" alt={`No Image Available ${props.image}`}></img>
        `${props.id}`
            <p>
              <strong>Name:</strong>{" "}
              <p name="name"
                onChange={props.handleInputChange}> {props.name}</p>
            </p>
            <p>
              <strong>Relationship: {""}</strong>
              <p name="membertype"
                onChange={props.handleInputChange}>
                {" "}{props.membertype}</p>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <p name="email"
                onChange={props.handleInputChange}>
                {props.email}</p>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <p name="phone"
                onChange={props.handleInputChange}>
                {props.phone}

              </p>{" "}
            </p>

        </div>
      </div>

  );
}

export default ProfileCardEdit;
