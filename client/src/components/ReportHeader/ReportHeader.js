import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";


class ReportHeader extends Component {

    state = {
        reportheader: {
            id: "",
            name: "",
            dob: "",
            allergies: "",
            medication: "",
            primaryphone: "",
            image: "",
            familyname: "",
        },
        familyProfile: {
            id: "",
            familyname: "",
            primaryphone: "",
        }
    }

    componentDidMount() {
        API.findMemberById(3)
            .then(res => {
                let reportheader = {
                    id: res.data.id,
                    name: res.data.name,
                    dob: res.data.dob,
                    allergies: res.data.allergies,
                    medication: res.data.medication,
                    image: res.data.image,

                };
                this.setState({ reportheader: reportheader })
            })
            .catch(err => console.log(err));

        API.findFamilyById(1)
            .then(res => {
                console.log(res);
                let familyProfile = {
                    id: res.data.id,
                    familyname: res.data.familyname,
                    primaryphone: res.data.primaryphone,
                };
                this.setState({ familyProfile: familyProfile });
                console.log(familyProfile);
            })
            .catch(err => console.log(err));

    }


    render() {
        return (
            <div>
                <div className="header-info">
                    <div className="container-fluid">
                        <div className="row" id="banner-row">

                            <div className="col-2">
                                <img className="image" alt={this.state.reportheader.image} src={this.state.reportheader.image}></img>
                            </div>
                            <div className="col">
                                <h1>{this.state.reportheader.name} {this.state.familyProfile.familyname}</h1>
                                <div className="row">
                                    <div className="col-4">
                                        <p><strong>Date of Birth:</strong> {this.state.reportheader.dob}</p>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>Parent/Guardian(s):</strong> </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <p><strong>Allergies:</strong> {this.state.reportheader.allergies}</p>
                                    </div>
                                    <div className="col-3">
                                        <p><strong>Phone:</strong> </p>
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