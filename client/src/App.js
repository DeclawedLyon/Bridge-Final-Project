import "./App.scss";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import TextInput from "./components/textInput";
import Navbar from "./components/Navbar";
import PriorityPkgs from "./components/PriorityPkgs";
// import { deliveryButton, clearButton } from "./helpers/statusFunctions";
import { useState, useContext } from "react";
import { stateContext } from "./context/StateContext";
import Popup from "./components/Popup";

export default function App(props) {
  const {
    state,
    // setState,
    thisPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
    searchByTrackingNum,
    searchByNickname,
    deliveryButton,
    clearButton,
    addTextAlert,
  } = useContext(stateContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!state) {
    return null;
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // document.getElementById("popup-box").style.display = "flex";
  };

  // 1 select this package
  // open popup with selected package
  // update this packages phone number, custom message ? custom message : "" , alert status {false ? true : false}
  // update the packages array with this package (erase old package object)
  // setState with new package array

  const mappedPackages = [...state.packages].reverse().map((mappedPackage) => {
    return (
      <TrackedPackage
        key={Math.random()}
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
        // onSMS={togglePopup}
        addTextAlert={addTextAlert}
        popup={togglePopup}
        phoneNum={null}
        textAlert={false}
        // onDelete={deletePackage}
        // selectPackage={selectPackage}
        late={mappedPackage.last_known_status === "LA" ? true : false}
      />
    );
  });

  const priorityMappedPackages = [...state.priorityPackages]
    .reverse()
    .map((priorityMappedPackage) => {
      return (
        <PriorityPkgs
          key={Math.random()}
          id={priorityMappedPackage.id}
          nickname={
            priorityMappedPackage.nickname === "N/A"
              ? priorityMappedPackage.tracking_number
              : priorityMappedPackage.nickname
          }
          sender={priorityMappedPackage.sent_from}
          recipient={priorityMappedPackage.sent_to}
          logo={priorityMappedPackage.courier}
          statusMessage={priorityMappedPackage.last_known_status}
          delivered={
            priorityMappedPackage.last_known_status === "DE" ? true : false
          }
          delayed={
            priorityMappedPackage.last_known_status === "EX" ? true : false
          }
          enRoute={
            priorityMappedPackage.last_known_status === "OF" ? true : false
          }
          late={priorityMappedPackage.last_known_status === "LA" ? true : false}
          // onDelete={deletePackage}
          // selectPriotityPackage={selectPriorityPackage}
        />
      );
    });

  return (
    // <StateProvider>
    <div className="App">
      <Navbar />
      <div className="App-main-body">
        <section className="viewer-container">
          <PackageManager
            searchByTrackingNum={searchByTrackingNum}
            searchByNickname={searchByNickname}
          />
          <Viewer />
          <Counters
            active={activeCount()}
            delayed={delayedCount()}
            out={outForDeliveryCount()}
          />
        </section>

        <section className="packages-container">
          {priorityMappedPackages}
          {mappedPackages}
        </section>
      </div>
      <div>
        {/* <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            addAlert={addTextAlert}
            handleClose={togglePopup}
            package={thisPackage}
          />
        )}
        {/* <TextInput /> */}
        {/* {<Popup handleClose={togglePopup} /> */}
      </div>
    </div>
    // </StateProvider>
  );
}
