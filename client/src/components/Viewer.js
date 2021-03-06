import React from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./Viewer.scss";

export default function Viewer() {
  const { state } = useContext(stateContext);

  const renderCourier = () => {
    if (state.thisPackage.courier === "1") {
      return <i className="fab fa-3x fa-fedex"></i>;
    }
    if (state.thisPackage.courier === "2") {
      return <div className="fab fa-2x fa-ups"></div>;
    }
  };

  const renderShade = () => {
    if (state.thisPackage.last_known_status === "DE") {
      return "delivered";
    }
    if (state.thisPackage.last_known_status === "LA") {
      return "late";
    }
    if (state.thisPackage.last_known_status === "OF") {
      return "en_route";
    }
    if (state.thisPackage.last_known_status === "EX") {
      return "delayed";
    }
  };

  return (
    <main id={renderShade()} className="viewer">
      <div className="description">
        <h1>
          <u>Shipment Details</u>
        </h1>
        <p>
          <b>Tracking #: </b>
          {state.thisPackage ? state.thisPackage.tracking_number : ""}
        </p>
        <p>
          {state.thisPackage.nickname ? <b>Nickname: </b> : ""}
          {state.thisPackage.nickname !== "N/A"
            ? state.thisPackage.nickname
            : ""}
          {state.thisPackage.nickname === "N/A" ? "N/A" : ""}
        </p>
        <p>
          {" "}
          <b>Delivery Address: </b>
          {state.thisPackage.to_st
            ? `${state.thisPackage.to_st}, ${state.thisPackage.to_city_province},
          ${state.thisPackage.to_post}`
            : "N/A"}
        </p>
        <p>
          <b>Description: </b>
          {state.thisPackage.description
            ? state.thisPackage.description
            : "N/A"}
        </p>
        <p>
          <b>Estimated Delivery Date: </b>
          {state.thisPackage.estimated_delivery
            ? state.thisPackage.estimated_delivery
            : "N/A"}
        </p>
        <p>
          <b>Delivery Date: </b>
          {state.thisPackage.date_delivered
            ? state.thisPackage.estimated_delivery
            : "N/A"}
        </p>
        <p>
          <b>Date Sent: </b>
          {state.thisPackage.date_sent ? state.thisPackage.date_sent : "N/A"}
        </p>
        <p>
          <b>Sent To: </b>
          {state.thisPackage.sent_to ? state.thisPackage.sent_to : "N/A"}
        </p>
        <p>
          <b>Sent From: </b>
          {state.thisPackage.sent_from ? state.thisPackage.sent_from : "N/A"}
        </p>
        <div className="courier">{renderCourier()}</div>
      </div>
    </main>
  );
}
