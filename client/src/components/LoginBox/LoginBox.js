import React, { Component } from "react";
import "./style.css";

class LoginBox extends Component {
    
    state = {

    }

    submitLogin() {
        
    }


    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-title">
                        <h1>Staycare</h1>
                        <hr />
                        <h5>SIGN IN</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-signin">
                            <div className="form-label-group">
                                {/* <label id="label" htmlFor="email">Email Address:</label> */}
                                <input className="form-control" type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="form-label-group">
                                {/* <label id="label" htmlFor="password">Password:</label> */}
                                <input className="form-control" type="password" name="password" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-md btn-primary btn-block text-uppercase" onClick={this.submitLogin}>sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginBox;