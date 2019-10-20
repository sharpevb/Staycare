import React from "react";
import "./style.css";

function ProfileCardEdit(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>EDIT:</strong> <input value={props.name}/>
          </li>
          <li>
            <strong>Location:</strong> <input value={props.id}/>
          </li>
          <li>
            <strong>Occupation:</strong> <input value={props.membertype}/> 
          </li>
          <li>
            <strong>email:</strong> <input value={props.email}/> 
          </li>
          <li>
            <strong>dob:</strong>  <input value={props.dob}/>
          </li>
          <li>
            <strong>phone:</strong> <input value={props.phone}/> 
          </li>
          <li>
            <strong>textaddress:</strong>  <input value={props.textaddress}/>
          </li>
          <li>
            <strong>allergies:</strong>  <input value={props.allergies}/>
          </li>
          <li>
            <strong>medication:</strong>  <input value={props.medication}/>
          </li>
          <li>
            <strong>familyname:</strong>  <input value={props.familyname}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCardEdit;
