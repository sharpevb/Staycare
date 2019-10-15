import React from "react";
import "./style.css";


function ReportCard(props) {


    // handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });

    // }


{/* <div>
        <form>
        <input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers">Diaper Change: </input>
        <input id="" value={this.state.feedings} onChange={this.handleInputChange} name="feedings">Feeding: </input>
        <input id="" value={this.state.naps} onChange={this.handleInputChange} name="naps">Naps: </input>
        <input id="" value={this.state.meds} onChange={this.handleInputChange} name="meds">Medications administered: </input>
        <input id="" value={this.state.incidents} onChange={this.handleInputChange} name="incidents">Incidents: </input>
        </form>
         
      </div> */}


    return (
        <div className="container-fluid" id="daily-report">
            <div className="row">
                <h1>Daily Report</h1>
            </div>

            <div className="row">
                <form>
                    {/* <label>Diaper Change:</label><input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers"></input> */}

                    <label>Diaper Change</label><p><input id="" name="diapers" placeholder="time"></input></p>
                    <label>Food: </label><input id="" name="feedings"></input>
                    <label>Sleep: </label><input id="" name="diapers" placeholder="time"></input> to <input id="" name="diapers" placeholder="time"></input>
                    <label>Medications administered: </label><input id="" name="meds"></input>
                    <label>Incidents: </label><input id="" name="incidents"></input>
                </form>
            </div>

        </div>

    )



}

export default ReportCard;