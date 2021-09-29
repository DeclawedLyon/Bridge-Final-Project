import React from "react";
import "./Viewer.scss";

export default function Viewer(props) {
  console.log(props)
 return (
  <main className="viewer">
    <div className="description">
      <h3>tracking number:</h3>
      <p>{props.package.tracking_number}</p>
      <h3>Shipping Info:</h3>
      <h4>Shipping Address</h4>
      <p>{props.package.to_st}, {props.package.to_city_province}, {props.package.to_post}</p>
      <h4>Courier</h4>
      <p>{props.package.courier}</p>
      <h3>Description:</h3>
      <p>{props.package.description}</p>
    </div>
  </main>
 ) ;
}
