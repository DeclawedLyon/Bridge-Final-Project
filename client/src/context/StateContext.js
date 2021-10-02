import react from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const stateContext = createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    packages: [],
    priorityPackages: [],
    packageId: "",
    thisPackage: {},
    // currentUser: 1,
    // currentUserObj: {},
    // currentCourier: 1,
    // currentCourierObj: {},
    trkNumSearch: "",
  });

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/packages"),
  //     axios.get(`/api/users/${state.currentUser}`),
  //     axios.get(`/api/couriers/${state.currentCourier}`),
  //     axios.get('/api/packages/get_priority')
  //   ]).then((response) => {

  //     setState((prev) => ({
  //       ...prev,
  //       packages: response[0].data,
  //       currentUser: response[1].data.user.id,
  //       currentUserObj: response[1].data,
  //       currentCourier: response[2].data.courier.id,
  //       currentCourierObj: response[2].data,
  //       priorityPackages: response[3].data
  //     }));
  //   });
  // }, [state.thisPackage]);

  //get non-priority packages
  useEffect(() => {
      axios.get('/api/packages')
      .then((response) => {
        setState((prev) => ({
          ...prev,
          packages: response.data,
        })
        )})
      }, [state.thisPackage])

  //get priority packages    
  useEffect(() => {
    axios.get('/api/packages/get_priority')
    .then((response) => {
      setState((prev) => ({
        ...prev,
        priorityPackages: response.data,
      })
    )})
  }, [state.thisPackage])
      

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
      const packages = state.packages.filter(item => item.id !== id);
  
      setState((prev) => ({
        ...prev,
        packages: packages,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const selectPackage = (id) => {

    let found = state.packages.find(function(pkg, index) {
      if(pkg.id === id)
        return pkg;
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
      // const packages = state.packages;
  
      setState((prev) => ({
        ...prev,
        priorityPackages: [...priorityPackages, state.thisPackage],
        // packages: [...packages]
      }))
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const addNewPackage = (trkNum) => {
    let found = state.packages.find(function(pkg, index) {
      console.log('in addNew', pkg)
      if(pkg.tracking_number === trkNum)
        return pkg;
    });

    setState((prev) => ({
      ...prev,
      thisPackage: found,
    }));

    // const packages = state.packages;

    // setState((prev) => ({
    //   ...prev,
    //   packages: [...packages, found]
    // }));
  }


  //functions for priority packages
  const deletePriorityPackage = (id) => {
    selectPriorityPackage(id);

    axios
    .put(`api/packages/remove?id=${id}`)
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      const packages = state.priorityPackages.filter(item => item.id !== id);
  
      setState((prev) => ({
        ...prev,
        priorityPackages: packages,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const selectPriorityPackage = (id) => {

    let found = state.priorityPackages.find(function(pkg, index) {
      if(pkg.id === id)
        return pkg;
    });

    setState((prev) => ({
      ...prev,
      thisPackage: found,
    }));
  };

  // this vvvvvvv should be fixed : it loads at the start.
  useEffect(() => {
    selectPackage(1);
  }, []);


  }

  const removeFromPriority = (id) => {
    selectPriorityPackage(id);

    axios
    .put(`api/packages/remove_from_priority?id=${id}`)
    .then(() => {
      const packages = state.packages; 
      // const priorityPackages = state.priorityPackages;
  
      setState((prev) => ({
        ...prev,
        packages: [...packages, state.thisPackage],
        // priorityPackages: [...priorityPackages]
      }))
    })
    .catch((err) => {
      console.log(err);
    });

    
  }
    

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
    return out;
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
    
  };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
