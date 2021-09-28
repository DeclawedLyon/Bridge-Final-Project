import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";

export default function App(props) {
  const [currentUser, setCurrentUser] = useState("user");
  const [currentCourier, setCurrentCourier] = useState("courier");
  const [statusColor, setStatusColor] = useState("rgb(243, 186, 81)");
  let currentUserObj = {};
  let currentCourierObj = {};

  const fetchUserData = () => {
    const userId = 1;
    axios
      .get(`/api/users/${userId}`) // Make all requests to "/api/whatever"
      .then((response) => {
        currentUserObj = response.data;
        console.log("userObj:", currentUserObj);
        setCurrentUser(response.data.user.name); //change name to anything or move the object around.
      });
  };

  const fetchCourierData = () => {
    const courierId = 1;
    axios.get(`/api/couriers/${courierId}`).then((response) => {
      currentCourierObj = response.data;
      console.log("courierObj:", currentCourierObj);
      setCurrentCourier(response.data.courier.name);
    });
  };

  const setStatus = (status) => {
    setStatusColor("rgb(117, 216, 117)");
  };
  const setError = (status) => {
    setStatusColor("rgb(238, 119, 119)");
  };

  return (
    <div className="App">
      <section className="viewer-container">
        <h1>{currentUser}</h1>
        <button onClick={() => fetchUserData()}>Fetch User Data</button>
        <h1>{currentCourier}</h1>
        <button onClick={() => fetchCourierData()}>Fetch Courier Data</button>
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

        <div
          className="tracked_package"
          style={{ backgroundColor: `${statusColor}` }}
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
        <button onClick={setStatus}>Set Error</button>
        <button onClick={setError}>Set Error</button>
      </section>
    </div>
  );
}
