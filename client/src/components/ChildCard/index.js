import React from "react";
import "./style.css";

function ChildCard(props) {
  return (
    <div className="card col-md-3">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>Name:</strong> {props.name}
      </div>
    </div>
  );
}

export default ChildCard;
