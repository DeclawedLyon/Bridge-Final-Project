import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";

export default function App(props) {
  const [state, setState] = useState({
    message: "Click the button to load data!",
    package: "Show me the package info!",
    packages: []
  });
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/users/1"),
      axios.get("/api/packages/1"),
      axios.get("/packages")
    ]).then((response) => {
      setState({
        message: state.message,
        package: state.package,
        packages: response[2].data
      })
    }, []);
  })

  const mappedPackages = state.packages.map(mappedPackage => {
    console.log("The current package is:", mappedPackage);
    return (
      <TrackedPackage
      key={`package-${mappedPackage.id}`}
      nickname={mappedPackage.nickname || mappedPackage.sent_to}
      sender={mappedPackage.sent_from}
      recipient={mappedPackage.sent_to}
      logo={mappedPackage.courier}
      statusMessage={mappedPackage.last_known_status}
      delivered={mappedPackage.last_known_status === "DE" ? true : false}
      />
    )
  })

  console.log(mappedPackages)

  // const fetchData = () => {
  //   axios
  //     .get("/api/users/1") // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data); // The entire response from the Rails API

  //       console.log(response.data); // Just the message
  //       setState({
  //         message: response.data.user.name,
  //         package: state.package
  //       });
  //     });
  // };
  // const fetchPackageData = () => {
  //   axios.get("/api/packages/1")
  //     .then((response) => {
  //       // console.log(response.data.package);
  //       setState({
  //         message: state.message,
  //         package: response.data.package.username
  //       })
  //     })
  // }
  // const fetchPackages = () => {
  //   axios.get("/packages")
  //     .then((response) => {
  //       console.log(response.data)
  //       // console.log("response from packages:",response.data)
  //       setState({
  //         message: state.message,
  //         package: state.package,
  //         packages: response.data
  //       })
  //       // console.log("current packages state:", state)
  //     })
  //     .catch(e => console.log(e))
  // }

  return (
    <div className="App">
      <section className="viewer-container">
        <h1>{state.message}</h1>
        {/* <button onClick={() => fetchData()}>Fetch Data</button> */}
        <h1>{state.package}</h1>
        {/* <button onClick={() => fetchPackageData()}>Show Packages</button>
        <button onClick={() => fetchPackages()}>Packages</button> */}
        <PackageManager />
        <Viewer />
        <Counters />
      </section>

      <section className="packages-container">
        <h1>I'm the packages container!</h1>
        {mappedPackages}

        <TrackedPackage
          statusColor={"green"}
          nickname={"To Hospital"}
          sender={"xxx coolplace drive"}
          recipient={"yyy awesome ave"}
          logo={"🚑"}
          statusMessage={"delivered"}
          delivered={true}
          // setStatusColor={setStatusColor}
        />

        <div
          className="tracked_package"
          // style={{ backgroundColor: `${statusColor}` }}
        >
          <span className="nickname">Tracking Nickname</span>
          <div className="shipping_details">
            <span className="sender">Sent From:</span>
            <span className="recipient">Sent To:</span>
          </div>
          <div className="package_footer">
            <span className="status_message">Status:</span>
          </div>
        </div>
      </section>
    </div>
  );
}
