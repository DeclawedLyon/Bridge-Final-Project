import React from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./Viewer.scss";

export default function Viewer() {
  const { state  } = useContext(stateContext);

  const renderCourier = () => {
    if (state.thisPackage.courier === "1") {
      return "FedEx"
    }
    if (state.thisPackage.courier === "2"){
      return "UPS"
    }
  }

  return (
    <main className="viewer">
      <h1>Details</h1>
      <div className="description">
        <p><b>Tracking #: </b>{state.thisPackage ? state.thisPackage.tracking_number : ""}</p>
        <p>{state.thisPackage.nickname !== 'N/A' ? <b>Nickname: </b> : ""}{state.thisPackage.nickname !== 'N/A' ? state.thisPackage.nickname : ""}</p>
        <p> <b>Delivery Address: </b>
          {state.thisPackage.to_st ? `${state.thisPackage.to_st}, ${state.thisPackage.to_city_province},
          ${state.thisPackage.to_post}` : ""}
        </p>
        <p><b>Courier: </b>{renderCourier()}</p>
        <p><b>Description: </b>{state.thisPackage.description ? state.thisPackage.description : ""}</p>
      </div>
    </main>
  );
} 
