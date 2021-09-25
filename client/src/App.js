import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import TrackedPackage from "./tracked_package"

export default function App(props) {
  const [state, setState] = useState("Click the button to load data!");
  const [phrase, setPhrase] = useState("Can I change this sentence?")
  const [statusColor, setStatusColor] = useState("rgb(243, 186, 81)")

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setState(response.data.message);
      });
  };


  const grabData = () => {
    axios
      .get("/api/tester") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.phrase); // Just the message
        setPhrase(response.data.phrase);
      });
  }

  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>Repeat Me.</span>);
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  }

  const setStatus = (status) => {
    setStatusColor("rgb(117, 216, 117)")
  }
  const setError = (status) => {
    setStatusColor("rgb(238, 119, 119)")
  }

  return (
    <div className="content_container">

      <div className="left_field">
        <div className="App">
          <h1>{state}</h1>
          <button onClick={fetchData}>Fetch Data</button>
        </div>
        <br />
        <div className="App">
          <h1>{phrase}</h1>
          <button onClick={grabData}>Change Phrase</button>
        </div>
        <br />
        <div>
          <div className="App Container">
            <h1>{textArray}</h1>
            <button onClick={handleClick}>Repeat Button</button>
          </div>
        </div>
      </div>

      <div className="right_field">
        <TrackedPackage
          statusColor={"green"}
          nickname={"To Hospital"}
          sender={"xxx coolplace drive"}
          recipient={"yyy awesome ave"}
          logo={"🚑"}
          statusMessage={"delivered"}
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
      </div>

    </div>
  );
}
