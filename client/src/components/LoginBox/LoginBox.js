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

    submitLogin(e) {
        e.preventDefault();
        //this should pass in what was entered on the form, but is not working.
        const login = { "email": "herman.munster@scaryway.com" };
        API.validateUser(login)
            .then(res => {
                let result = res.data.FamilyId;
                //also store in session state if found
                sessionStorage.setItem("familyId", result);
                window.location.replace("/");
            })
            .catch(err => console.log(err));

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
                                <button className="btn btn-md btn-primary btn-block text-uppercase" onClick={this.submitLogin}>sign in</button>
                            </form>
                        </div>
                    </div> 
        )
    }
}

export default LoginBox;