import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";


class ReportHeader extends Component {

    state = {
        kid: {
            id: "",
            name: "",
            dob: "",
            allergies: "",
            medication: "",
            image: "",
        },
        familyProfile: {
            id: "",
            surname: "",
            primaryphone: "",
        }
    }

    componentDidMount() {
        //Eddie Info
        API.findMemberById(3)
            .then(res => {
                let kid = {
                    id: res.data.id,
                    name: res.data.name,
                    dob: res.data.dob,
                    allergies: res.data.allergies,
                    medication: res.data.medication,
                    image: res.data.image,

                };
                this.setState({ kid: kid })
            });
            //.catch(err => console.log(err));

            // Family members and their info
            API.findMembersByFamily(1)
            .then(res => {
                //console.log(res)
                let familyProfile = {
                    child1: res.data[0].name,
                    parent1: res.data[1].name,
                    parent2: res.data[2].name,
                    surname: res.data[0].Family.familyname,
                    primaryphone: res.data[1].phone
                };
                this.setState({familyProfile: familyProfile});
                //console.log(familyProfile);
            })
            //.catch(err => console.log(err));

    }


    render() {
        return (
            <div>
                <div className="header-info">
                    <div className="container-fluid">
                        <div className="row" id="banner-row">

                            <div className="col-3">
                                <img className="image" alt={this.state.kid.image} src={this.state.kid.image}></img>
                            </div>
                            <div className="col">
                                <h1>{this.state.kid.name} {this.state.familyProfile.surname}</h1>
                                <div className="row">
                                    <div className="col-4">
                                        <p><strong>Date of Birth:</strong> {this.state.kid.dob}</p>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>Parent/Guardian(s): </strong>{this.state.familyProfile.parent1} {this.state.familyProfile.surname}, {this.state.familyProfile.parent2} {this.state.familyProfile.surname}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <p><strong>Allergies:</strong> {this.state.kid.allergies}</p>
                                    </div>
                                    <div className="col-3">
                                        <p><strong>Phone: </strong>{this.state.familyProfile.primaryphone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}


export default ReportHeader;