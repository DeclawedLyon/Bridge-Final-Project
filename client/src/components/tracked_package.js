import React from "react";
import classnames from "classnames"
import './tracked_package.scss';

export default function TrackedPackage(props) {
  const packageClass = classnames("tracked_package", {
    "tracked_package--delivered": props.delivered,
    "tracked_package--late": props.late,
    "tracked_package--delayed": props.deleyed,
    "tracked_package--en_route": props.en_route
  })
  
  return (
    <div className={packageClass}>
      <span className="nickname">Nickname:{props.nickname}</span>
      <div className="shipping_details">
        <span className="sender">Sent From:{props.sender}</span>
        <span className="recipient">Sent To:{props.recipient}</span>
      </div>
      <div className="package_footer">
        <span className="courier_logo">{props.logo}</span>
        <span className="status_message">Status:{props.statusMessage}</span>
      </div>
    </div>
  )
}