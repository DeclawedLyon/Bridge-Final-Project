import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package"

export default function App(props) {
  const [state, setState] = useState("Click the button to load data!");
  const [statusColor, setStatusColor] = useState("rgb(243, 186, 81)")

  const fetchData = () => {
    axios
      .get("/api/packages/1") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data); // Just the message
        setState(response.data.package.sent_from);
      });
  };


  const setStatus = (status) => {
    setStatusColor("rgb(117, 216, 117)")
  }
  const setError = (status) => {
    setStatusColor("rgb(238, 119, 119)")
  }

  return (
    <div className="App">
      <section className="viewer-container">
        <h1>{state}</h1>
        <button onClick={() => fetchData()}>Fetch Data</button>
        <PackageManager />
        <Viewer />
        <Counters />
      </section>

      <section className="packages-container">
        <h1>I'm the packages container!</h1>

        <TrackedPackage
          statusColor={"green"}
          nickname={"To Hospital"}
          sender={"xxx coolplace drive"}
          recipient={"yyy awesome ave"}
          logo={"🚑"}
          statusMessage={"delivered"}
          delivered={true}
          setStatusColor={setStatusColor}
        />

        <div className="tracked_package" style={{ backgroundColor: `${statusColor}` }}>
          <span className="nickname">Tracking Nickname</span>
          <div className="shipping_details">
            <span className="sender">Sent From:</span>
            <span className="recipient">Sent To:</span>
          </div>
          <div className="package_footer">
            <span className="courier_logo">🚛</span>
            <span className="status_message">Status:</span>
          </div>
        </div>
        <button onClick={setStatus}>Set Error</button>
        <button onClick={setError}>Set Error</button>
      </section>

    </div>
  );
}
