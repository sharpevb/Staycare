import React, { Component } from "react";
import API from "../utils/API";
import NavHome from "../components/NavHome/NavHome";
import Container from "../components/Container";
import ChildCard from "../components/ChildCard";
import Alert from "../components/Alert";

class Homepage extends Component {
  state = {
    children: [],
    error: "",
    familyId: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    //store the family ID in session state on login

    const loggedIn = parseInt(sessionStorage.getItem("familyId"));
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
      sessionStorage.removeItem('familyId');
      window.location.replace("/login");
    }
  }

  render() {
    return (
      <div className="header-info">
        <NavHome/>
        <div>
          <Container>
            <h1 className="childcard-title">Children</h1>
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
              />
            ))}

          </Container>
        </div>
      </div>
    );
  }
}

export default Homepage;
