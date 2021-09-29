import React from "react";
import classnames from "classnames";
import './tracked_package.css';

export default function TrackedPackage(props) {
  const packageClass = classnames("tracked_package", {
    "tracked_package--delivered": props.delivered,
    "tracked_package--late": props.late,
    "tracked_package--delayed": props.delayed,
    "tracked_package--en_route": props.enRoute
  })

  
  return (
    <div className={packageClass}>
      <div className="package_header">
        <span className="nickname">Nickname:{props.nickname}</span>
        <i onClick={() => props.onDelete(props.id)} className="fas fa-times-circle"></i>
      </div>
      <div className="shipping_details">
        <span className="sender">Sent From:{props.sender}</span>
        <span className="recipient">Sent To:{props.recipient}</span>
      </div>
      <div className="package_footer">
        <span className="courier_logo">{props.logo}</span>
        <span className="status_message">Status:{props.statusMessage}</span>
      </div>
      <button onClick={() => props.onSelect()} />
    </div>
  )
}