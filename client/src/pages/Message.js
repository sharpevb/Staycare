import React, { Component } from "react";
import "./Message.css";
import Container from "../components/Container";
import NavProfile from "../components/NavProfile/NavProfile";
import Upload from "../components/Upload/Upload";
import API from "../utils/API";

class Message extends Component {
  state = {
    uploadType: "email",
    subject: 'Message from StayCare!',
    message: "",
    addresses: "",
    families: [],
    selectedFamily: "",
    memberId: 3
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  componentDidMount() {

    const loggedIn = parseInt(sessionStorage.getItem("familyId"));

    //they have not logged in, so send them to login screen
    if (loggedIn === null) {
      window.location.replace("/login");
    };

    //this will load up the list of families to select from.
    API.findMembersMessaging()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data);
        };
        const results = JSON.parse(res.data);

        var provider = 0;   //index of the provider/send to all record.
        var all_emails = '';  //concatenate all addresses
        if (loggedIn === 0) {
          for (let i = 0; i < results.length; i++) {
            if (results[i].id === 0) {
              provider = i;
              results[i].familyname = 'All';
            }
            else {
              if (all_emails === "") {
                all_emails = results[i].addresses;
              }
              else {
                all_emails += ',' + results[i].addresses;
              }
            }
          }
          //going to put all the email addresses on the send to all record.
          results[provider].addresses = all_emails

          this.setState({ families: results });
        }
        //it's a family member, just let them send to the provider.
        else {
          let familyA = results.filter(result => result.id === 0);
          this.setState({ families: familyA });
        };

        this.setState({ selectedFamily: 0 });

      });
  };

  render() {
    const { families } = this.state;

    let familiesList = families.length > 0
      && families.map((item, i) => {
        return (
          <option key={item.id} value={i}>{item.familyname}</option>
        )
      }, this);
    return (

      <div className="header-info">
        <NavProfile />
        <Container style={{ minHeight: "80%" }}>

          <div className="Card">
            <form className="contact-form" method="POST" action="/contact">

              <div className="form-field">
                <label htmlFor="family"></label>
                <div className="label-content">Send to:</div>
                <select name="selectedFamily" col="35" onClick={(e) => this.setState({ selectedFamily: e.target.value })}>
                  {familiesList}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="subject">
                  <div className="label-content">Subject:</div>
                  <input size="35" type="subject" name="subject" onChange={this.handleInputChange} required value={this.state.subject} />
                </label>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  <div className="label-content">Message (optional):</div>
                  <textarea cols="35" className="stretch" name="message" rows="5" onChange={this.handleInputChange} value={this.state.message} />
                </label>
              </div>

            </form>
            <Upload
              id={this.state.memberId}
              key={this.state.memberId}
              uploadType={this.state.uploadType}
              message={this.state.message}
              subject={this.state.subject}
              families={this.state.families}
              selectedFamily={this.state.selectedFamily}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Message;
