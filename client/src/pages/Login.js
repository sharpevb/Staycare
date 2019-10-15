import React, { Component } from "react";
import LoginBox from "../components/LoginBox/LoginBox";
import Footer from "../components/Footer/Footer";

class Login extends Component {
  
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div className="box-container">
                <LoginBox />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
