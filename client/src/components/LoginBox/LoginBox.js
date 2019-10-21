import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class LoginBox extends Component {

    state = {
        familyId: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    submitLogin = e => {
        e.preventDefault();
        //this should pass in what was entered on the form, but is not working.
        //convert email to lowercase for comparison.

        if (this.state.email && this.state.password) {
            const login = { "email": this.state.email.toLowerCase(), "password": this.state.password };

            API.validateUser(login)
                .then(res => {
                    //make sure data is not null
                    console.log("res.data"+res.data)
                    if (res.data !== null && JSON.parse(res.data) !== null) {
                        console.log("res.data parse "+JSON.parse(res.data))
                        var result = JSON.parse(res.data).FamilyId;
                        //also store in session state if found
                        if (result >= 0) {
                            sessionStorage.setItem("familyId", result);
                            window.location.replace("/");
                        }
                        else {
                            alert('Invalid email or password, or unauthorized user.  Please correct.');
                        }
                    }
                    else {
                            alert('Invalid email or password, or unauthorized user.  Please correct.');
                        }
                    })
                .catch(err => console.log(err));
        }
        else {
            alert('You must enter both email and password.');
        }
    };


    render() {
        return (
            <div className="card-body">
                <div className="card-title">
                    <h1>Staycare</h1>
                    <hr />
                    <h5>SIGN IN</h5>
                </div>
                <div className="card-text">
                    <form className="form-signin">
                        <div className="form-label-group">
                            {/* <label id="label" htmlFor="email">Email Address:</label> */}
                            <input className="form-control" type="email" name="email" value={this.state.email}
                                placeholder="Email Address" onChange={this.handleInputChange} required />
                        </div>

                        <div className="form-label-group">
                            {/* <label id="label" htmlFor="password">Password:</label> */}
                            <input className="form-control" type="password" name="password" value={this.state.password}
                                placeholder="Password" onChange={this.handleInputChange} required />
                        </div>
                        <button id="login-button" className="btn btn-md btn-primary btn-block text-uppercase" onClick={this.submitLogin}>sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginBox;