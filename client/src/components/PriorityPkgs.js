import React from "react";
import classnames from "classnames";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./PriorityPkgs.scss";

export default function PriorityPkgs(props) {
  const { selectPackage, deletePackage } = useContext(stateContext);

  const priorityPackageClass = classnames("priority_package", {
    "tracked_package--delivered": props.delivered,
    "tracked_package--late": props.late,
    "tracked_package--delayed": props.delayed,
    "tracked_package--en_route": props.enRoute
  })

  return (
    <main className="priority-container">
    <div className={priorityPackageClass} onClick={() => selectPackage(props.id)}>
      <div className="package_header">
        <span className="nickname">Nickname:{props.nickname}</span>
        <i
          onClick={() => deletePackage(props.id)}
          className="fas fa-times-circle"
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

  
  
