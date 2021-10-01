import React from "react";
import "./PackageManager.scss";
import axios from "axios";
import { useState } from "react";


export default function PackageManager(props) {
  const [ localState, setLocalState] = useState({
    trkNumNew: "",
    newNickname: "",
    newDescription: "",
  })


  //if you add all of the column names to state you can access the whole package in the browser; the setup below (selectedPackage) is not working

  const newPackage = (event) => {
    event.preventDefault();

    axios
      .post(
        `api/packages/add_item?tracking_number=${localState.trkNumNew}&nickname=${localState.newNickname}&description=${localState.newDescription}`
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

  let trkNum;
  let nickname;

  const resetState = function () {
    setLocalState((prev) => ({
      ...prev,
      trkNumNew: "",
      newNickname: "",
      newDescription: "",
    }));
  };

  const showForm = function () {
    document.getElementById("add-button").style.display = "none";

    document.getElementById("add-package-form").style.display = "block";
  };



  return (
    <main className="package-manager">

      <form id="trkNum-search-form" autoComplete="off" onSubmit={props.searchByTrackingNum}>
        <input
          id="trkNum-search-form-value"
          type="text"
          placeholder="Search By Tracking Number"
          onClick={() => {document.getElementById("trkNum-error").style.display = "none"}}
          value={trkNum}
          onChange={(event) => {trkNum = event.target.value}}
        />
      </form>
      {/* <button type="submit" form="search-form">
        Search
      </button> */}

      <form id="nickname-search-form" autoComplete="off" onSubmit={props.searchByNickname}>
        <input
          id="nickname-search-form-value"
          type="text"
          placeholder="Search By Nickname"
          onClick={() => {document.getElementById("trkNum-error").style.display = "none"}}
          value={nickname}
          onChange={(event) => {nickname = event.target.value}}
        />
      </form>

      <div id="trkNum-error">No packages found.</div>

      <button id="add-button" onClick={() => showForm()}>
        Add a Package +
      </button>

      <form id="add-package-form" onSubmit={newPackage}>
        <input
          type="text"
          placeholder="Enter a new tracking number +"
          value={localState.trkNumNew}
          onChange={(event) => {
            setLocalState((prev) => ({ ...prev, trkNumNew: event.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Optional: Enter a Nickname"
          value={localState.newNickname}
          onChange={(event) => {
            setLocalState((prev) => ({ ...prev, newNickname: event.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Optional: Enter a Description"
          value={localState.newDescription}
          onChange={(event) => {
            setLocalState((prev) => ({
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
