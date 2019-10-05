import React, { Component } from "react"

class UpdateDailyLog extends Component {
  state = {
    diapers: "",
    feeding: "",
    naps: ""
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
        <input id="" value={this.state.feeding} onChange={this.handleInputChange} name="feeding">Feeding: </input>
        <input id="" value={this.state.naps} onChange={this.handleInputChange} name="naps">Naptime: </input>
        </form>
         
      </div>
    )
  }
}