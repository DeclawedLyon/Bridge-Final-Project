import "./App.scss";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import TextInput from "./components/textInput";
import Navbar from "./components/Navbar";
import PriorityPkgs from "./components/PriorityPkgs";
import { useState, useContext } from "react";
import { stateContext } from "./context/StateContext";
import Popup from "./components/Popup";

export default function App(props) {
  const {
    state,
    thisPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
    searchByTrackingNum,
    searchByNickname,
    addTextAlert,
  } = useContext(stateContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!state) {
    return null;
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
        addTextAlert={addTextAlert}
        popup={togglePopup}
        phoneNum={null}
        textAlert={false}
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
        />
      );
    });

  return (
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
        {isOpen && (
          <Popup
            addAlert={addTextAlert}
            handleClose={togglePopup}
            package={thisPackage}
          />
        )}
      </div>
    </div>
  );
}
