import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    packages: [],
    thisPackage: {},
    currentUser: 1,
    currentUserObj: {},
    currentCourier: 1,
    currentCourierObj: {},
    trkNumNew: "",
    trkNumSearch: "",
    newNickname: "",
    newDescription: "",
  });

  useEffect(() => {
    Promise.all([
      axios.get("/packages"),
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
  }, [state.currentUser, state.currentCourier]);

  const deletePackage = (id) => {
    return axios
      .delete(`/api/packages/${id}`)
      .then(() => {
        const packages = {
          ...(state.packages[id] = null),
        };
        setState((prev) => ({ ...prev, packages }));
      })
      .catch((e) => console.log(e));
  };

  const selectedPackage = () => {
    console.log("hello");
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

  return {
    state,
    setState,
    deletePackage,
    selectedPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
  };
}
