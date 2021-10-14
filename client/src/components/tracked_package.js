import React from "react";
import classnames from "classnames";
import "./tracked_package.scss";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import useVisualMode from "../hooks/useVisualMode";
import SmsForm from "./textInput";

export default function TrackedPackage(props) {
  const { state, selectPackage, deletePackage, makePriority } =
    useContext(stateContext);

  const TEXT = "TEXT";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(props.text ? SHOW : SHOW);

  const packageClass = classnames("tracked_package", {
    "tracked_package--delivered": props.delivered,
    "tracked_package--late": props.late,
    "tracked_package--delayed": props.delayed,
    "tracked_package--en_route": props.enRoute,
  });

  const renderStatusIcons = () => {
    if (props.delivered) {
      return <i className="fas fa-solid fa-2x fa-check"></i>;
    }

    if (props.late) {
      return <i className="fas fa-solid fa-2x fa-clock"></i>;
    }

    if (props.delayed) {
      return <i id="delayed" className="fas fa-solid fa-2x fa-exclamation"></i>;
    }

    if (props.enRoute) {
      return <i className="fas fa-solid fa-2x fa-truck"></i>;
    }
  };

  const renderStatus = () => {
    if (props.delivered) {
      return "Delivered!  ";
    }

    if (props.late) {
      return "Late  ";
    }

    if (props.delayed) {
      return "Attention Needed  ";
    }

    if (props.enRoute) {
      return "Out for Delivery  ";
    }
  };

  const renderCourier = () => {
    if (props.logo === "1") {
      return <i className="fab fa-3x fa-fedex"></i>;
    }
    if (props.logo === "2") {
      return <i className="fab fa-2x fa-ups"></i>;
    }
  };

  const implementPopup = () => {
    const id = props.id;
    selectPackage(props.id);
    return props.popup(id);
  };

  return (
    <div>
      <div className={packageClass} onClick={() => selectPackage(props.id)}>
        <div className="package_header">
          <i
            onClick={() => deletePackage(props.id)}
            className="fas fa-times-circle"
          ></i>
          <span className="nickname">{props.nickname}</span>
          <div>
            <i
              id="priority"
              onClick={() => makePriority(props.id)}
              className="fas fa-plus-circle"
            ></i>
            <i id="sms" class="fas fa-sms" onClick={() => implementPopup()}></i>
          </div>
        </div>
        <div className="shipping_details">
          <span className="sender">Sent From: {props.sender}</span>
          <span className="recipient">Sent To: {props.recipient}</span>
        </div>
        <div className="package_footer">
          <span className="courier_logo">{renderCourier()}</span>
          <span className="status_message">
            {renderStatus()}
            {renderStatusIcons()}
          </span>
        </div>
      </div>
    </div>
  );
}
