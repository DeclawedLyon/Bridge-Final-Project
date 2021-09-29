import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import Navbar from "./components/Navbar";
import useApplicationData from "./helpers/useApplicationData"

export default function App(props) {

  const {state, deletePackage, selectedPackage} = useApplicationData()

  console.log(state)
  const mappedPackages = state.packages.map(mappedPackage => {
    return (
      <TrackedPackage
      key={`package-${mappedPackage.id}`}
      id={mappedPackage.id}
      nickname={mappedPackage.nickname === "N/A" ? mappedPackage.tracking_number : mappedPackage.nickname}
      sender={mappedPackage.sent_from}
      recipient={mappedPackage.sent_to}
      logo={mappedPackage.courier}
      statusMessage={mappedPackage.last_known_status}
      delivered={mappedPackage.last_known_status === "DE" ? true : false}
      delayed={mappedPackage.last_known_status === "EX" ? true : false}
      enRoute={mappedPackage.last_known_status === "OF" ? true : false}
      onDelete={deletePackage}
      onSelect={selectedPackage}
      />
    )
  })

  const insertDescription = () => {
    return (
      <span>Super cool sentence here</span>
    )
  }

  return (
    <div className="App">
      <Navbar />
    <div className="App-main-body">
      <section className="viewer-container">
        <h1>{state.currentUser}</h1>
        <h1>{state.currentCourier}</h1>
        <PackageManager />
        <Viewer 
        description={state.thisPackage ? state.thisPackage.description : ""}
        />
        <button onClick={() => insertDescription()}>Hello</button>
        <Counters />
      </section>

      <section className="packages-container">
        <h1>I'm the packages container!</h1>
        {mappedPackages}
      </section>
    </div>

    </div>
  );
}