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
    //need to make sure they're logged in.
    const loggedIn = parseInt(sessionStorage.getItem("familyId"));
    const memberIdLogged = parseInt(sessionStorage.getItem("memberIdLogged"));
    //if family id = 0 then it's a provider   
    if (loggedIn >= 0) {
      this.loadProfile(memberIdLogged);
    }
    //they have not logged in, so send them to login screen
    else {
      sessionStorage.removeItem('familyId');
      window.location.replace("/login");
    }
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

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(value)
    console.log(name)
    this.setState({
      profile: {
        ...this.state.profile,
        [name]: value
      }
    })
  }

  handleInputChangeFamily = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(value)
    console.log(name)
    this.setState({
      familyProfile: {
        ...this.state.familyProfile,
        [name]: value
      }
    })
  }

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
        handleInputChange={this.handleInputChange}
      />
        <FamilyCardEdit
          id={this.state.familyProfile.id}
          familyname={this.state.familyProfile.familyname}
          image={this.state.familyProfile.image}
          primaryphone={this.state.familyProfile.primaryphone}
          address1={this.state.familyProfile.address1}
          address2={this.state.familyProfile.address2}
          deleteFamily={this.deleteFamily}
          handleInputChangeFamily={this.handleInputChangeFamily}
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
      <div>
        <NavProfile />
        {(this.state.familyProfile.familyname !== 'x') ? editCard : readCard}
        <Footer /></div>
    )
  }
}

export default Profile;
