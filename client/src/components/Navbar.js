import React from "react";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <header className="navbar">
      <img
        className="wheel-logo"
        src="https://cdn1.iconfinder.com/data/icons/aye-ayecons/32/05-ship-wheel-512.png"
        alt="wheel"
      />
      <div className="navbar__title navbar__item">BRIDGE</div>
    </header>
  );
}
