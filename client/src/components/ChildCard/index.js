import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ChildCard(props) {
  return (
    <div className="card-body col-md-4" id="childcard-body">
      <div className="card-img-container">

        <Link
          to={
            `/dailyreport/${props.id }`
          }
        >
          <img id={props.id} alt={props.name} src={props.image} onClick={(e) => sessionStorage.setItem("memberId", `${props.id}`)}/>
        </Link>
        
      </div>
    <div className="childcard-content">
      <strong>{props.name}</strong>
    </div>
    </div >
  );
}


export default ChildCard;
