import React from "react";
import "./style.css";

var style = {
  backgroundColor: "cadetBlue",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}

        <p>
          Staycare © 2019 Copyright: {" "}
          <a href="https://github.com/sharpevb/Staycare">DVD </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
