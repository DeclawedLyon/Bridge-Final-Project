import React from "react";
import classnames from "classnames"

export default function TrackedPackage(props) {
  const packageClass = classnames("tracked_package", {
    "tracked_package--delivered": props.delivered,
    late: props.late,
    deleyed: props.deleyed,
    en_route: props.en_route
  })
  
  const setStatusColor = props.setStatusColor

  const setStatus = (status) => {
    setStatusColor("rgb(117, 216, 117)")
  }
  const setError = (status) => {
    setStatusColor("rgb(238, 119, 119)")
  }


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
      <button onClick={setStatus}>Set Error</button>
      <button onClick={setError}>Set Error</button>
    </div>
  )
}