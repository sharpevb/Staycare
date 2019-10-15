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
                    <div className="col">
                        <label>Diaper Change: </label> <input id="" name="diapers" placeholder="time"></input>
                    </div>

                    <div className="col">
                        <label>Food: </label> 
                        <div className="btn-group">
                             <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Meals </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div> <input id="" name="feedings"></input>
                    </div>

                    <div className="col">
                        <label>Sleep: </label> <input id="" name="diapers" placeholder="time"></input> to <input id="" name="diapers" placeholder="time"></input>
                    </div>

                    <div className="col">
                        <label>Medications administered: </label> <input id="" name="meds"></input>
                    </div>

                    <div className="col">
                        <label>Incidents: </label> <input id="" name="incidents"></input>
                    </div>
                </form>
            </div>

        </div>

    )



}

export default ReportCard;