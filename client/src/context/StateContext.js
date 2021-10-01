import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const stateContext = createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    packages: [],
    packageId: '',
    thisPackage: {},
    currentUser: 1,
    currentUserObj: {},
    currentCourier: 1,
    currentCourierObj: {},
    trkNumSearch: "",
  });

  // const [ packages, setPackages ] = useState([]);
  // const [ packageId, setPackageId ] = useState({
    // packageId: '',
  // });

  useEffect(() => {
    Promise.all([
      axios.get("/api/packages"),
      axios.get(`/api/users/${state.currentUser}`),
      axios.get(`/api/couriers/${state.currentCourier}`),
    ]).then((response) => {
      setState((prev) => ({
        ...prev,
        packages: response[0].data,
        currentUser: response[1].data.user.id,
        currentUserObj: response[1].data,
        currentCourier: response[2].data.courier.id,
        currentCourierObj: response[2].data,
      }));
    });
  }, []);


  const searchByTrackingNum = async (event) => {
    event.preventDefault();
    let trkNum = document.getElementById("trkNum-search-form-value").value;
    
      const data = await axios
        .get(`/api/getpackage?tracking_number=${trkNum}`)
        .then((response) => {
          if (!response.data[0]) {
            console.log("ERROR!")
            document.getElementById("trkNum-error").style.display = "block";
            return response;
          }
          return response.data[0]
        })
        setState((prev) => ({
          ...prev,
          thisPackage: data
        }));
      
      let frm = document.getElementById("trkNum-search-form");
      frm.reset();
  };

  const searchByNickname = async (event) => {
    event.preventDefault();
    let nickname = document.getElementById("nickname-search-form-value").value;

      const data = await axios
        .get(`/api/getpackagenickname?nickname=${nickname}`)
        .then((response) => {
          console.log("response1:", response);
          if (!response.data[0]) {
            console.log("ERROR!")
            document.getElementById("trkNum-error").style.display = "block";
            return response;
          }
          return response.data[0]
        })
        setState((prev) => ({
          ...prev,
          thisPackage: data
        }));
      
      let frm = document.getElementById("nickname-search-form");
      frm.reset();
  };

  const deletePackage = (id) => {
    selectPackage(id)

    

    return axios
      .delete(`/api/removepackage/${id}`)
      .then(() => {
        const packages = {
          ...(state.packages[state.packageId] = null),
        };
        setState((prev) => ({ ...prev, packages }));
      })
      .catch((e) => console.log(e));
  };

  const selectPackage = (packageId) => {
    let packageIndex = packageId - 1;

    setState((prev) => ({
      ...prev,
      thisPackage: state.packages[packageIndex],
    }));
  };


  const activeCount = state.packages ? state.packages.length : 0;

  const delayedCount = () => {
    let delayed = 0;

    for (const pack of state.packages) {
      if (pack.last_known_status === "EX" || pack.last_known_status === "LA") {
        delayed += 1;
      }
    }
    return delayed;
  };

  const outForDeliveryCount = () => {
    let out = 0;

    for (const pack of state.packages) {
      if (pack.last_known_status === "OF") {
        out += 1;
      }
    }
    return out;
  };

  const providerData =  {
    state,
    // packageId,
    // currentUser,
    // currentUserObj,
    // currentCourier,
    // currentCourierObj,
    // trkNumSearch,
    // thisPackage,
    // deletePackage,
    selectPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
    searchByTrackingNum,
    searchByNickname
  };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );

} 

// export function StateConsumer() {
//   return stateContext
// }