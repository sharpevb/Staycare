import React from "react";
import "./style.css";

function ProfileCardEdit(props) {
  return (
    <div>  
        <div className="card-body" id="profileCardEditable">
        <img id="member-img" src={props.image} className="card-img-top" alt={'Not Available'}></img>
        <p name="name" onChange={props.handleInputChange}> <strong>Name: </strong>   {props.name}</p> 
        <p name="membertype" onChange={props.handleInputChange}> <strong>Member Type: </strong>  {props.membertype}</p> 
        <p name="email" onChange={props.handleInputChange}> <strong>Email: </strong>   {props.email}</p> 
        <p name="phone" onChange={props.handleInputChange}> <strong>Phone: </strong>   {props.phone}</p>
        </div>
      </div>

  );
}

export default ProfileCardEdit;
