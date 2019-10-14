import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import ChildCard from "../components/ChildCard";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    children: [],
    error: "",
    familyId: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    //store the family ID in session state on login

    //sessionStorage.setItem("familyId",1);
    const loggedIn = sessionStorage.getItem("familyId");
   
    console.log("state familyId : "+loggedIn)
    //if family id = 0 then it's a provider   
    if (loggedIn === 0) {
      API.findMembers()
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          //filter to just children.
          const results = res.data;
          const newArray = results.filter(result => result.membertype === "Child");
          this.setState({ children: newArray, error: "" });

        })
        .catch(err => this.setState({ error: err.name }))
    }
    //then member who has logged in.
    else if (loggedIn > 0) {
      API.findMembersByFamily(loggedIn)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          //filter to just children.
          const results = res.data;
          const newArray = results.filter(result => result.membertype === "Child");
          this.setState({ children: newArray, error: "" });
        })
        .catch(err => this.setState({ error: err.name }))
    }
    //they have not logged in, so send them to login screen
    else {
      window.location.replace("/login");
    }
  }


 /* handleClicked(id) {
    window.location.replace("/profile");
    //this.setState({ search: event.target.value });
  };*/


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Children</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>

          {this.state.children.map(child => (
            <ChildCard
              id={child.id}
              key={child.id}
              name={child.name}
              image={child.image}
           //   onClick={this.handleClicked(child.id)}
            />
          ))}

        </Container>
      </div>
    );
  }
}

export default Search;
