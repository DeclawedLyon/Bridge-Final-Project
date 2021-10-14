import React from "react";
import "./Navbar.scss";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";

export default function Navbar(props) {
  const { deliveryButton, clearButton } = useContext(stateContext);

  return (
    <header className="navbar">
      <img
        onClick={() => deliveryButton()}
        className="wheel-logo"
        src="https://cdn1.iconfinder.com/data/icons/aye-ayecons/32/05-ship-wheel-512.png"
        alt="wheel"
      />
      <div onClick={() => clearButton()} className="navbar__title navbar__item">
        BRIDGE
      </div>
    </header>
  );
}
