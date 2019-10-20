import React from "react";

function FamilyProfileEdit(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.image} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Edit:</strong> <input value={props.familyname}/>
          </li>
          <li>
            <strong>Family ID:</strong> <input value={props.id}/>
          </li>

          <li>
            <strong>Primary Phone:</strong> <input value={props.primaryphone}/>
          </li>
          <li>
            <strong>Primary Address:</strong> <input value={props.address1}/>
          </li>
          <li>
            <strong>Secondary Address:</strong> <input value={props.address2}/>
          </li>
        </ul>
        <button onClick={() => props.deleteFamily(props.id)} className="remove">
          Delete Family
        </button>
      </div>
    </div>
  );
}

export default FamilyProfileEdit;
