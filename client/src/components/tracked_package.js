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
      return "Delivered!  "
    }

    if (props.late) {
      return "Late  "
    }

    if (props.delayed) {
      return "Delayed  "
    }

    if (props.enRoute) {
      return "Out for Delivery  "
    }
  };

  const renderCourier = () => {
    if (props.logo === "1") {
      return <i className="fab fa-3x fa-fedex"></i>
    }
    if (props.logo === "2"){
      return <i className="fab fa-2x fa-ups"></i>
    }
  }

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
        <span className="courier_logo">{renderCourier()}</span>
        <span className="status_message">{renderStatus()}{renderStatusIcons()}</span>
      </div>
    </div>
  );
}
