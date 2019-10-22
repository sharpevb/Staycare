import React, { Component } from "react";
import "./style.css";


class DRbutton extends Component {

    submit() {
        alert("Updated")
    }
    render() {
      return (
        <div>
            <button 
            onClick={this.submit}
            className="w3-button" 
            id="submit-button">Submit</button>
        </div>
    )  
    }
    

}


export default DRbutton;