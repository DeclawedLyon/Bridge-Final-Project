import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    packages: [],
    packageId: '',
    thisPackage: {},
    currentUser: 1,
    currentUserObj: {},
    currentCourier: 1,
    currentCourierObj: {},
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
    selectPackage(id)

    console.log(id);

    return axios
      .delete(`/removepackage/${id}`)
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
      packageId: state.packages[packageIndex],
    }));
  };

  const activeCount = state.packages.length;

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
    selectPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
  };
}
