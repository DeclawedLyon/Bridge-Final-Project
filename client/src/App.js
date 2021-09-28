import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import Navbar from "./components/Navbar";

export default function App(props) {
  const [state, setState] = useState({
    packages: [],
    currentUser: 1,
    currentUserObj: {},
    currentCourier: 1,
    currentCourierObj: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/packages"),
      axios.get(`/api/users/${state.currentUser}`),
      axios.get(`/api/couriers/${state.currentCourier}`)
    ]).then((response) => {
      setState({
        packages: response[0].data,
        currentUser: response[1].data.user.id,
        currentUserObj: response[1].data,
        currentCourier: response[2].data.courier.id,
        currentCourierObj: response[2].data
      })
    });
  }, [state.currentUser, state.currentCourier])

  const mappedPackages = state.packages.map(mappedPackage => {
    return (
      <TrackedPackage
      key={`package-${mappedPackage.id}`}
      nickname={mappedPackage.nickname === "N/A" ? mappedPackage.tracking_number : mappedPackage.nickname}
      sender={mappedPackage.sent_from}
      recipient={mappedPackage.sent_to}
      logo={mappedPackage.courier}
      statusMessage={mappedPackage.last_known_status}
      delivered={mappedPackage.last_known_status === "DE" ? true : false}
      delayed={mappedPackage.last_known_status === "EX" ? true : false}
      enRoute={mappedPackage.last_known_status === "OF" ? true : false}
      />
    )
  })

  return (
    <div className="App">

      <Navbar />

      <div className="App-main-body">
        <section className="viewer-container">
          <h1>{state.currentUser}</h1>
          <h1>{state.currentCourier}</h1>
          <PackageManager />
          <Viewer />
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
