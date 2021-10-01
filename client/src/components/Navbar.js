import React from "react";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">BRIDGE</div>
      <div>Welcome, {props.user}</div>
    </header>
  );
}
