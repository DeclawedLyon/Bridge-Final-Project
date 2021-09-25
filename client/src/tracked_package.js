import React from "react";

export default function TrackedPackage(props) {

  return (
    <div className="tracked_package" style={{ backgroundColor: `${props.statusColor}` }}>
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