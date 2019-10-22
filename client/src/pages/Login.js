import React, { Component } from "react";
import LoginBox from "../components/LoginBox/LoginBox";

class Login extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <i className="fas fa-home"></i> <span className="title">Staycare</span>
          </a>
        </nav>
        <div className="container-fluid" id="login-background">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto" >
              <div className="box-container" >
                <LoginBox />
              </div>
            </div>
          </div> 
        </div>
        
      </div>
    );
  }
}

export default Login;
