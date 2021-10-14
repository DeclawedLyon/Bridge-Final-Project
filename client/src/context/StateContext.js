import React from "react";
import { createContext, useState, useEffect } from "react";
import SmsForm from "../components/textInput";
import axios from "axios";

export const stateContext = createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    packages: [],
    priorityPackages: [],
    packageId: "",
    thisPackage: {},
    trkNumSearch: "",
  });

  const sendSms = (packageId) => {
    // event.preventDefault();
    const packageObj = state.packages.filter((item) => item.id === packageId);

    let smsObj = {
      mobile_number:
        "1" + (packageObj.alertStatus ? packageObj.alertStatus : "4033059248"),
      message: packageObj.alertStatus
        ? packageObj.message
        : "The status of your package has been updated!",
    };

    fetch("http://localhost:3001/sms_messages/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(smsObj),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };

  //get non-priority packages
  useEffect(() => {
    axios.get("/api/packages").then((response) => {
      setState((prev) => ({
        ...prev,
        packages: response.data,
      }));
    });
  }, [state.thisPackage]);

  //get priority packages
  useEffect(() => {
    axios.get("/api/packages/get_priority").then((response) => {
      setState((prev) => ({
        ...prev,
        priorityPackages: response.data,
      }));
    });
  }, [state.thisPackage]);

  //search functions
  const searchByTrackingNum = async (event) => {
    event.preventDefault();
    let trkNum = document.getElementById("trkNum-search-form-value").value;

    const data = await axios
      .get(`/api/getpackage?tracking_number=${trkNum}`)
      .then((response) => {
        if (!response.data[0]) {
          console.log("ERROR!");
          document.getElementById("trkNum-error").style.display = "block";
          return response;
        }
        return response.data[0];
      });
    setState((prev) => ({
      ...prev,
      thisPackage: data,
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
          document.getElementById("trkNum-error").style.display = "block";
          return response;
        }
        return response.data[0];
      });
    setState((prev) => ({
      ...prev,
      thisPackage: data,
    }));

    let frm = document.getElementById("nickname-search-form");
    frm.reset();
  };

  //functions for non-priority packages
  const deletePackage = (id) => {
    selectPackage(id);

    axios
      .put(`api/packages/remove?id=${id}`)
      .then(() => {
        selectPackage(id);
      })
      .then(() => {
        const packages = state.packages.filter((item) => item.id !== id);

        setState((prev) => ({
          ...prev,
          packages: packages,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectPackage = (id) => {
    let found = state.packages.find(function (pkg, index) {
      if (pkg.id === id) return pkg;
    });

    setState((prev) => ({
      ...prev,
      thisPackage: found,
    }));
  };

  const makePriority = (id) => {
    selectPackage(id);

    axios
      .put(`api/packages/make_priority?id=${id}`)
      .then(() => {
        const priorityPackages = state.priorityPackages;

        setState((prev) => ({
          ...prev,
          priorityPackages: [...priorityPackages, state.thisPackage],
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewPackage = (trkNum) => {
    let newPkg = {};

    let found = state.packages.find(function (pkg, index) {
      if (pkg.tracking_number === trkNum) newPkg = pkg;
      return newPkg;
    });

    setState((prev) => ({
      ...prev,
      thisPackage: found,
    }));
  };

  //functions for priority packages
  const deletePriorityPackage = (id) => {
    selectPriorityPackage(id);

    axios
      .put(`api/packages/remove?id=${id}`)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        const packages = state.priorityPackages.filter(
          (item) => item.id !== id
        );

        setState((prev) => ({
          ...prev,
          priorityPackages: packages,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectPriorityPackage = (id) => {
    let found = state.priorityPackages.find(function (pkg, index) {
      if (pkg.id === id) return pkg;
    });

    setState((prev) => ({
      ...prev,
      thisPackage: found,
    }));
  };

  const removeFromPriority = (id) => {
    selectPriorityPackage(id);

    axios
      .put(`api/packages/remove_from_priority?id=${id}`)
      .then(() => {
        const packages = state.packages;

        setState((prev) => ({
          ...prev,
          packages: [...packages, state.thisPackage],
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //functions for counters
  const activeCount = () => {
    let active = 0;

    for (const pack of state.packages) {
      if (pack.active === true) {
        active += 1;
      }
    }

    for (const pack of state.priorityPackages) {
      if (pack.active) {
        active += 1;
      }
    }
    return active;
  };

  const delayedCount = () => {
    let delayed = 0;

    for (const pack of state.packages) {
      if (pack.last_known_status === "EX" || pack.last_known_status === "LA") {
        delayed += 1;
      }
    }

    for (const pack of state.priorityPackages) {
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

    for (const pack of state.priorityPackages) {
      if (pack.last_known_status === "OF") {
        out += 1;
      }
    }
    return out;
  };

  const clearButton = () => {
    axios
      .put("api/packages/clear?id=3")
      .then((response) => {
        sendSms(3);
      })
      .catch((err) => {
        console.log(err);
      });

    selectPackage(3);
  };
  const deliveryButton = () => {
    axios
      .put("api/packages/deliver?id=5")
      .then((response) => {
        sendSms(5);
      })
      .catch((err) => {
        console.log(err);
      });

    selectPackage(5);
  };

  const addTextAlert = (id) => {
    let packageToChange = state.packages.find(function (pkg, index) {
      if (pkg.id === id) return pkg;
    });

    let newPackage = {
      active: packageToChange.active,
      courier: packageToChange.courier,
      created_at: packageToChange.created_at,
      date_delivered: packageToChange.date_delivered,
      date_sent: packageToChange.date_sent,
      description: packageToChange.description,
      estimated_delivery: packageToChange.estimated_delivery,
      from_city_province: packageToChange.from_city_province,
      from_post: packageToChange.from_post,
      from_st: packageToChange.from_st,
      id: packageToChange.id,
      is_priority: packageToChange.is_priority,
      last_known_status: packageToChange.last_known_status,
      nickname: packageToChange.nickname,
      sent_from: packageToChange.sent_from,
      sent_to: packageToChange.sent_to,
      signed_for: packageToChange.signed_for,
      to_city_province: packageToChange.to_city_province,
      to_post: packageToChange.to_post,
      to_st: packageToChange.to_st,
      tracking_number: packageToChange.tracking_number,
      updated_at: packageToChange.updated_at,
      username: packageToChange.username,
      phoneNum: packageToChange.phoneNum,
      message: packageToChange.message,
      alertStatus: packageToChange.alertStatus,
      phoneNum: "4033059248",
      message: "test text",
      alertStatus: true,
    };

    const index = state.packages.indexOf(packageToChange);

    let newPackages = state.packages;
    newPackages[index] = newPackage;

    setState((prev) => ({
      ...prev,
      thisPackage: newPackage,
    }));
  };

  const providerData = {
    state,
    selectPriorityPackage,
    makePriority,
    deletePackage,
    deletePriorityPackage,
    selectPackage,
    activeCount,
    delayedCount,
    outForDeliveryCount,
    searchByTrackingNum,
    searchByNickname,
    deliveryButton,
    clearButton,
    removeFromPriority,
    addNewPackage,
    addTextAlert,
  };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
