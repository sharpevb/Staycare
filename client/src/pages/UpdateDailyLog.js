import React, { Component } from "react"

class UpdateDailyLog extends Component {
  state = {
    diapers: "",
    feedings: "",
    naps: "",
    meds: "",
    incidents: ""
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });

  }

  render() {
    return (
      <div>
        <form>
        <input id="" value={this.state.diapers} onChange={this.handleInputChange} name="diapers">Diaper Change: </input>
        <input id="" value={this.state.feedings} onChange={this.handleInputChange} name="feedings">Feeding: </input>
        <input id="" value={this.state.naps} onChange={this.handleInputChange} name="naps">Naps: </input>
        <input id="" value={this.state.meds} onChange={this.handleInputChange} name="meds">Medications administered: </input>
        <input id="" value={this.state.incidents} onChange={this.handleInputChange} name="incidents">Incidents: </input>
        </form>
         
      </div>
    )
  }
}