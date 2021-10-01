import "./App.scss";
import Viewer from "./components/Viewer";
import Counters from "./components/Counters";
import PackageManager from "./components/PackageManager";
import TrackedPackage from "./components/tracked_package";
import Navbar from "./components/Navbar";
import { deliveryButton, clearButton } from "./helpers/statusFunctions";
// import useApplicationData from "./helpers/useApplicationData";
import { useContext } from "react";
import { stateContext } from "./context/StateContext";
// import StateProvider from "./context/StateContext";

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
    searchByNickname,
  } = useContext(stateContext);
  if (!state) {
    return null;
  }
  // useEffect(() => {console.log("packages:",state.packages)}, [state.packages])
  const mappedPackages = [...state.packages].reverse().map((mappedPackage) => {
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

  // const deliveryButton = () => {
  //   for (const pack in state.packages) {
  //     if (pack.tracking_number === "1Z12345E02919807") {
  //       setState(pack.last_known_status === "DE");
  //     }
  //   }
  // };

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
          <Viewer package={thisPackage} />
          <Counters
            active={activeCount}
            delayed={delayedCount()}
            out={outForDeliveryCount()}
          />
        </section>

        <section className="packages-container">{mappedPackages}</section>
      </div>
    </div>
    // </StateProvider>
  );
}
