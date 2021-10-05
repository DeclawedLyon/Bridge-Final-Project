import React from "react";
import classnames from "classnames";
import "./tracked_package.scss";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";

export default function TrackedPackage(props) {
  const { selectPackage, deletePackage, makePriority } =
    useContext(stateContext);

  const packageClass = classnames("tracked_package", {
    "tracked_package--delivered": props.delivered,
    "tracked_package--late": props.late,
    "tracked_package--delayed": props.delayed,
    "tracked_package--en_route": props.enRoute,
  });

  const renderStatus = () => {
    if (props.delivered) {
      return <i className="fas fa-solid fa-lg fa-check"></i>;
    }

    if (props.late) {
      return <i className="fas fa-solid fa-lg fa-clock"></i>;
    }

    if (props.delayed) {
      return <i id="delayed" className="fas fa-solid fa-lg fa-exclamation"></i>;
    }

    if (props.enRoute) {
      return <i className="fas fa-solid fa-lg fa-truck"></i>;
    }
  };

  return (
    <div className={packageClass} onClick={() => selectPackage(props.id)}>
      <div className="package_header">
        <i
          onClick={() => deletePackage(props.id)}
          className="fas fa-times-circle"
        ></i>
        <span className="nickname">{props.nickname}</span>
        <i
          onClick={() => makePriority(props.id)}
          className="fas fa-plus-circle"
        ></i>
      </div>
      <div className="shipping_details">
        <span className="sender">Sent From:{props.sender}</span>
        <span className="recipient">Sent To:{props.recipient}</span>
      </div>
      <div className="package_footer">
        <span className="courier_logo">{props.logo}</span>
        <span className="status_message">Status:{props.statusMessage} {renderStatus()}</span>
      </div>
    </div>
  );
}
