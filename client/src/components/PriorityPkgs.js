import React from "react";
import classnames from "classnames";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./PriorityPkgs.scss";

export default function PriorityPkgs(props) {
  const { selectPriorityPackage, deletePriorityPackage, removeFromPriority } = useContext(stateContext);

  const priorityPackageClass = classnames("priority_package", {
    "priority_package--delivered": props.delivered,
    "priority_package--late": props.late,
    "priority_package--delayed": props.delayed,
    "priority_package--en_route": props.enRoute
  })

  return (
    <main className="priority-container">
    <div className={priorityPackageClass} onClick={() => selectPriorityPackage(props.id)}>
      <div className="package_header">
        <span className="nickname">Nickname:{props.nickname}</span>
        <i
          onClick={() => deletePriorityPackage(props.id)}
          className="fas fa-times-circle"
        ></i>
        <i
          onClick={() => removeFromPriority(props.id)}
          className="fas fa-circle"
        ></i>
      </div>
      <div className="shipping_details">
        <span className="sender">Sent From:{props.sender}</span>
        <span className="recipient">Sent To:{props.recipient}</span>
      </div>
      <div className="package_footer">
        <span className="courier_logo">{props.logo}</span>
        <span className="status_message">Status:{props.statusMessage}</span>
      </div>
    </div>
    
    </main>
  );
}

  
  
