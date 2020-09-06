import React from "react";
import fire from "../config/fire";
import "./Header.css";

function Header() {
  
  const logOut = () => {
    fire.auth().signOut();
  }

  return (
    <header className="nav">
      <div className="links">
        <a href="#" className="link link-selected">
          Dashboard
        </a>
        <a href="#" className="link">
          Apps
        </a>
        <a href="#" className="link">
          UI Elements
        </a>
        <a href="#" className="link">
         Pages
        </a>
        <a href="#" onClick={logOut} className="link">
          Log Out
        </a>
      </div>
    </header>
  );
}

export default Header;
