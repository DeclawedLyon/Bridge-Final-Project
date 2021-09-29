import React from "react";
import "./PackageManager.scss";
import axios from "axios";
import useApplicationData from "../helpers/useApplicationData";

export default function PackageManager() {
  //if you add all of the column names to state you can access the whole package in the browser; the setup below (selectedPackage) is not working
  const { state, setState } = useApplicationData();

  const fetchData = (event) => {
    event.preventDefault();
    //sending the tracking number to a custom route with trknum as parameter
    axios
      .get(`/api/getpackage?tracking_number=${state.trkNumSearch}`)
      .then((response) => {
        setState({
          thisPackage: response.data[0],
        });
        // console.log(state.selectedPackage);
        let frm = document.getElementById("search-form");
        frm.reset();
      });
  };

  const newPackage = (event) => {
    event.preventDefault();

    axios
      .post(
        `/packages/add_item?tracking_number=${state.trkNumNew}&nickname=${state.newNickname}&description=${state.newDescription}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    resetState();

    document.getElementById("add-package-form").reset();
    document.getElementById("add-package-form").style.display = "none";

    document.getElementById("add-button").style.display = "block";
  };

  const resetState = function () {
    setState({
      trkNumSearch: "",
    });
  };

  const handleChange = function (event) {
    setState({
      trkNumSearch: event.target.value,
    });
  };

  const showForm = function () {
    document.getElementById("add-button").style.display = "none";

    document.getElementById("add-package-form").style.display = "block";
  };

  return (
    <main className="package-manager">
      <form id="search-form" autoComplete="off" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Search By Tracking Number"
          value={state.trkNumSearch}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
      <button type="submit" form="search-form">
        Search
      </button>

      <button id="add-button" onClick={() => showForm()}>
        Add a Package +
      </button>

      <form id="add-package-form" onSubmit={newPackage}>
        <input
          type="text"
          placeholder="Enter a new tracking number +"
          value={state.trkNumNew}
          onChange={(event) => {
            setState((prev) => ({ ...prev, trkNumNew: event.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Optional: Enter a Nickname"
          value={state.newNickname}
          onChange={(event) => {
            setState((prev) => ({ ...prev, newNickname: event.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Optional: Enter a Description"
          value={state.newDescription}
          onChange={(event) => {
            setState((prev) => ({
              ...prev,
              newDescription: event.target.value,
            }));
          }}
        />
        <button type="submit" form="add-package-form">
          Submit to be tracked
        </button>
      </form>
    </main>
  );
}
