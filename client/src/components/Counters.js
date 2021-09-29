import React from "react";
import "./Counter.css";

export default function Counters(props) {
  return (
    <main className="counters-container">
      <p>Active Packages : {props.active}</p>
      <p>Delayed Packages : {props.delayed}</p>
      <p>Out For Delivery : {props.out}</p>
    </main>
  );
}
