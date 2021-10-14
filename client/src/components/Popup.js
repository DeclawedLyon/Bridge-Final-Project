import React from "react";
import SmsForm from "./textInput";
import "./popup.scss";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <SmsForm addAlert={props.addAlert} />
      </div>
    </div>
  );
};

export default Popup;
