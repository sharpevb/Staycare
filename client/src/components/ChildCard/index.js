import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ChildCard(props) {
  return (
    <div className="card col-md-3">
      <div className="img-container">

        <Link
          to={{
            pathname: "/dailyreport",
            data: { id: props.id }
          }
          }
        >
          <img alt={props.name} src={props.image} />
        </Link>
        
      </div>
    <div className="content">
      <strong>{props.name}</strong>
    </div>
    </div >
  );
}


export default ChildCard;
