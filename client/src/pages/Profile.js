import React, { Component } from "react";
import API from "../utils/API";
import Footer from "../components/Footer/Footer"

class Profile extends Component {
  state = {
    profile: {
      //FROM MEMBERS TABLE
      id: "id",
      name: "name",
      membertype: "membertype",
      email: "email",
      dob: "dob",
      phone: "phone",
      textaddress: "textaddress",
      allergies: "allergies",
      medication: "medication",
      image: "image"
      //FROM FAMILY TABLE
      // familyname: "familyname",
      // primaryphone: "primaryphone",
      // address1: "address1",
      // address2: "address2",
    }
  };

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    API.findMemberById(1)
      .then(res => {
        console.log(res);
        let profile = {
          //THESE VALUES MUST MATCH THE FIELDS IN THE DATABASE
          id: res.data.id,
          name: res.data.name,
          membertype: res.data.membertype,
          email: res.data.email,
          dob: res.data.dob,
          phone: res.data.phone,
          textaddress: res.data.textaddress,
          allergies: res.data.allergies,
          medication: res.data.medication,
          image: res.data.image,
          familyname: res.data
        }
        // API.findFamilyById(1)
        // .then(res => {
        //     let familyprofile = {
        //     //FAMILY PROFILE, SET STATE
        //     this.setState({ profile: profile, familyProfile: familyProfile });
        //     })        // API.findFamilyById(1)
        // .then(res => {
        //     let familyprofile = {
        //     //FAMILY PROFILE, SET STATE
        //     this.setState({ profile: profile, familyProfile: familyProfile });
        //     })
      })
      .catch(err => console.log(err));
  };

  render() {
    // const studentRecords = this.state.profile;
    return (
      <div>
        <form>
          <label htmlFor="id">id: </label>
          <input
            type="text"
            id="id"
            name="id"
            value={this.state.profile.id}
          ></input>
          <br></br>
          <label htmlFor="name">name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.profile.name}
          ></input>
          <br></br>
          <label htmlFor="membertype">membertype: </label>
          <input
            type="text"
            id="membertype"
            name="membertype"
            value={this.state.profile.membertype}
          ></input>
          <br></br>
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.profile.email}
          ></input>
          <br></br>
          <label htmlFor="dob">dob: </label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={this.state.profile.dob}
          ></input>
          <br></br>
          <label htmlFor="phone">phone: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={this.state.profile.phone}
          ></input>
          <br></br>
          <label htmlFor="textaddress">textaddress: </label>
          <input
            type="text"
            id="textaddress"
            name="textaddress"
            value={this.state.profile.textaddress}
          ></input>
          <br></br>
          <label htmlFor="allergies">allergies: </label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={this.state.profile.allergies}
          ></input>
          <br></br>
          <label htmlFor="medication">medication: </label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={this.state.profile.medication}
          ></input>
          <br></br>
          <label htmlFor="image">image: </label>
          <input
            type="text"
            id="image"
            name="image"
            value={this.state.profile.image}
          ></input>
          <br></br>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Profile;

// parent1Phone: res.data.parent1Phone,
// parent1Email: res.data.parent1Email,
// parent1Address: res.data.parent1Address,

// parent2Pic: res.data.parent2Pic,
// parent2Name: res.data.parent2Name,
// parent2Relationship: res.data.parent2Relationship,
// parent2Phone: res.data.parent2Phone,
// parent2Email: res.data.parent2Email,
// parent2Address: res.data.parent2Address,

// authorized4PickupPic: res.data.authorized4PickupPic,
// authorized4PickupName: res.data.authorized4PickupName,
// authorized4PickupRelationship: res.data.authorized4PickupRelationship,
// authorized4PickupPhone: res.data.authorized4PickupPhone,
// authorized4PickupEmail: res.data.authorized4PickupEmail,
// authorized4PickupAddress: res.data.authorized4PickupAddress
