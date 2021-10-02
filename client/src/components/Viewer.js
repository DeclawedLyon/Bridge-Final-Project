import React from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./Viewer.scss";

export default function Viewer() {
  const { state  } = useContext(stateContext);

  return (
    <main className="viewer">
      <div className="description">
        <h3>tracking number:</h3>
        <p>{state.thisPackage ? state.thisPackage.tracking_number : ""}</p>
        <h3>Shipping Info:</h3>
        <h4>Shipping Address</h4>
        <p>
          {state.thisPackage ? `${state.thisPackage.to_st}, ${state.thisPackage.to_city_province},
          ${state.thisPackage.to_post}` : ""}
        </p>
        <h4>Courier</h4>
        <p>{state.thisPackage ? state.thisPackage.courier : ""}</p>
        <h3>Description:</h3>
        <p>{state.thisPackage ? state.thisPackage.description : ""}</p>
      </div>
    </main>
  );
}
