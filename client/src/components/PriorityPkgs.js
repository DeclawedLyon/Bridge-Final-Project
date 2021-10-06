import React from "react";
import classnames from "classnames";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./PriorityPkgs.scss";

export default function PriorityPkgs(props) {
  const { selectPriorityPackage, deletePriorityPackage, removeFromPriority } =
    useContext(stateContext);

  const priorityPackageClass = classnames("priority_package", {
    "priority_package--delivered": props.delivered,
    "priority_package--late": props.late,
    "priority_package--delayed": props.delayed,
    "priority_package--en_route": props.enRoute,
  });

  const renderStatusIcons = () => {
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

  const renderStatus = () => {
    if (props.delivered) {
      return "Delivered!";
    }

    if (props.late) {
      return "Late";
    }

    if (props.delayed) {
      return "Delayed  ";
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
      return <i className="fab fa-3x fa-ups"></i>;
    }
  };

  return (
    <div
      className={priorityPackageClass}
      onClick={() => selectPriorityPackage(props.id)}
    >
      <div className="package_header">
        <i
          onClick={() => deletePriorityPackage(props.id)}
          className="fas fa-times-circle"
        ></i>
        <span className="nickname">{props.nickname}</span>
        <i
          onClick={() => removeFromPriority(props.id)}
          className="fas fa-minus-circle"
        ></i>
      </div>
      <div className="shipping_details">
        <span className="sender">Sent From:{props.sender}</span>
        <span className="recipient">Sent To:{props.recipient}</span>
      </div>
      <div className="package_footer">
        <span className="courier_logo">{renderCourier()}</span>
        <span className="status_message">
          {renderStatus()} {renderStatusIcons()}
        </span>
      </div>
    </div>
  );
}
