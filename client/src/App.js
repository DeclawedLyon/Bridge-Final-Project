import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";

export default function App(props) {
  const [state, setState] = useState("Click the button to load data!");

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data); // Just the message
        setState(response.data.message);
      });
  };

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
      </section>
    </div>
  );
}
