import "./App.scss";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import Navbar from "./components/Navbar";
// import useApplicationData from "./helpers/useApplicationData";
import { useContext, useEffect } from "react";
import { stateContext } from "./context/StateContext";
import StateProvider from "./context/StateContext";

export default function App(props) {
  const {
    state,
    // setState,
    thisPackage,
    selectPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
    searchByTrackingNum,
<<<<<<< HEAD
    deliveryButton,
    exceptionButton,
  } = useApplicationData();

  const mappedPackages = state.packages.map((mappedPackage) => {
=======
    searchByNickname
  } = useContext(stateContext);
  if(!state){return null}
  // useEffect(() => {console.log("packages:",state.packages)}, [state.packages])
  const mappedPackages = [...state.packages].reverse().map((mappedPackage) => {
>>>>>>> master
    return (
      <TrackedPackage
        key={`package-${mappedPackage.id}`}
        id={mappedPackage.id}
        nickname={
          mappedPackage.nickname === "N/A"
            ? mappedPackage.tracking_number
            : mappedPackage.nickname
        }
        sender={mappedPackage.sent_from}
        recipient={mappedPackage.sent_to}
        logo={mappedPackage.courier}
        statusMessage={mappedPackage.last_known_status}
        delivered={mappedPackage.last_known_status === "DE" ? true : false}
        delayed={mappedPackage.last_known_status === "EX" ? true : false}
        enRoute={mappedPackage.last_known_status === "OF" ? true : false}
        // onDelete={deletePackage}
        selectPackage={selectPackage}
      />
    );
  });

  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar user={state.currentUser} />
      <div className="App-main-body">
        <section className="viewer-container">
          <button onClick={() => deliveryButton()}>Delivery</button>
          <button onClick={() => exceptionButton()}>Exception</button>
          <PackageManager searchByTrackingNum={searchByTrackingNum} />
          <Viewer package={state.thisPackage} />
          <Counters
            active={activeCount}
            delayed={delayedCount()}
            out={outForDeliveryCount()}
          />
        </section>
=======
    // <StateProvider>
      <div className="App">
        <Navbar />
        <div className="App-main-body">
          <section className="viewer-container">
            <PackageManager
              searchByTrackingNum={searchByTrackingNum}
              searchByNickname={searchByNickname}
            />
            <Viewer
              package={thisPackage}
            />
            <Counters
              active={activeCount}
              delayed={delayedCount()}
              out={outForDeliveryCount()}
            />
          </section>
>>>>>>> master

          <section className="packages-container">
            {mappedPackages}
          </section>
        </div>
      </div>
    // </StateProvider>
  );
}
