import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrappers-g">
      <div
        style={{ backgroundImage: "url(./images/union.jpeg)" }}
        className="back"
      ></div>

      <div className="port-pix">
        <img src="./images/texture.jpeg" alt="" />
        <img src="./images/zizi1.jpg" alt="" className="texture" />
      </div>
      <div>
        <button
          type="button"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Link to="./Container">Wida</Link>
        </button>
        <img src="./images/fire.gif" alt="" className="App-logo" />
      </div>
    </div>
  );
};

export default Header;
