import React, { Component } from "react";
import API from "../utils/API";
import NavProfile from "../components/NavProfile/NavProfile";
import Footer from "../components/Footer/Footer";
import ProfileCardReadOnly from "../components/ProfileCard/ProfileCardReadOnly"
import ProfileCardEdit from "../components/ProfileCard/ProfileCardEdit"
import FamilyCardReadOnly from "../components/FamilyProfile/FamilyProfileReadOnly";
import FamilyCardEdit from "../components/FamilyProfile/FamilyProfileEdit";

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
    },
    familyProfile: {
      id: "id",
      familyname: "familyname",
      primaryphone: "primaryphone",
      address1: "address1",
      address2: "address2",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      image: "image"
    }
  };

  componentDidMount() {
    this.loadProfile(4);
  }

  loadProfile = (id) => {
      API.findMemberById(id)
      .then(res => {
        let profile = {
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
          familyname: res.data.familyname
        };
        API.findFamilyById(res.data.FamilyId)
        .then(res => {
          console.log(res);
          let familyProfile = {
            id: res.data.id,
            familyname: res.data.familyname,
            primaryphone: res.data.primaryphone,
            address1: res.data.address1,
            address2: res.data.address2,
            createdAt: res.data.createdAt,
            updatedAt: res.data.updatedAt
          };
        this.setState({ profile: profile, familyProfile: familyProfile });
      })
      .catch(err => console.log(err));
    })


      .catch(err => console.log(err));
  };

deleteFamily = id => {
  API.deleteFamily(id)
  .then(res => this.findFamilyById(id))
  .catch(err => console.log(err));
}

  render() {
    let editCard = 
      <div><ProfileCardEdit 
      id={this.state.profile.id}
      name={this.state.profile.name}
      membertype={this.state.profile.membertype}
      email={this.state.profile.email}
      dob={this.state.profile.dob}
      phone={this.state.profile.phone}
      textaddress={this.state.profile.textaddress}
      allergies={this.state.profile.allergies}
      medication={this.state.profile.medication}
      image={this.state.profile.image}
      familyname={this.state.profile.familyname}
      />
      <FamilyCardEdit
      id={this.state.familyProfile.id}
      familyname={this.state.familyProfile.familyname}
      image={this.state.familyProfile.image}
      primaryphone={this.state.familyProfile.primaryphone}
      address1={this.state.familyProfile.address1}
      address2={this.state.familyProfile.address2}
      deleteFamily={this.deleteFamily}
      /></div>;

      let readCard = 
      <div><ProfileCardReadOnly
      id={this.state.profile.id}
      name={this.state.profile.name}
      membertype={this.state.profile.membertype}
      email={this.state.profile.email}
      dob={this.state.profile.dob}
      phone={this.state.profile.phone}
      textaddress={this.state.profile.textaddress}
      allergies={this.state.profile.allergies}
      medication={this.state.profile.medication}
      image={this.state.profile.image}
      familyname={this.state.profile.familyname}
      />
      <FamilyCardReadOnly
      id={this.state.familyProfile.id}
      familyname={this.state.familyProfile.familyname}
      image={this.state.familyProfile.image}
      primaryphone={this.state.familyProfile.primaryphone}
      address1={this.state.familyProfile.address1}
      address2={this.state.familyProfile.address2}
      deleteFamily={this.deleteFamily}
      /></div>;

return (
        <div><NavProfile />
        {(this.state.familyProfile.familyname === 'Providers') ? editCard : readCard}
        <Footer /></div>
    )
  }
}

export default Profile;

//ORIGINAL RENDER CODE FROM PROFILE WHICH WILL RENDER AN UGLY FORM
/* <div>
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
</div>
<div>
<form>
  <label htmlFor="familyname">Family Name: </label>
  <input
    type="text"
    id="familyname"
    name="familyname"
    value={this.state.familyProfile.familyname}
  ></input>
  <br></br>
  <label htmlFor="primaryphone">Primary Phone: </label>
  <input
    type="number"
    id="primaryphone"
    name="primaryphone"
    value={this.state.familyProfile.primaryphone}
  ></input>
  <br></br>
  <label htmlFor="address1">Primary Address: </label>
  <input
    type="text"
    id="address1"
    name="address1"
    value={this.state.familyProfile.address1}
  ></input>
  <br></br>
  <label htmlFor="address2">Secondary Address: </label>
  <input
    type="text"
    id="address2"
    name="address2"
    value={this.state.familyProfile.address2}
  ></input>
</form>
</div>
<hr></hr> */