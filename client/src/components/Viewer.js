import React from "react";
import "./Viewer.scss";

export default function Viewer(props) {
  // const {
  //   state,
  //   // setState,
  //   thisPackage,
  //   selectPackage,
  //   activeCount,
  //   delayedCount,
  //   outForDeliveryCount,
  //   searchByTrackingNum,
  //   searchByNickname
  // } = useContext(stateContext);
  console.log("Viewer props are:", props);
  return (
    <main className="viewer">
      <div className="description">
        <h3>tracking number:</h3>
        <p>{props.package ? props.package.tracking_number : ""}</p>
        <h3>Shipping Info:</h3>
        <h4>Shipping Address</h4>
        <p>
          {props.package ? `${props.package.to_st}, ${props.package.to_city_province},${" "}
          ${props.package.to_post}` : ""}
        </p>
        <h4>Courier</h4>
        <p>{props.package ? props.package.courier : ""}</p>
        <h3>Description:</h3>
        <p>{props.package ? props.package.description : ""}</p>
      </div>
    </main>
  );
}
