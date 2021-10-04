import React from "react";
import "./PackageManager.scss";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";


export default function PackageManager(props) {
  
  const [ localState, setLocalState ] = useState({
    trkNumNew: "",
    newNickname: "",
    newDescription: "",
  })

  const { searchByTrackingNum, searchByNickname, addNewPackage } = useContext(stateContext);

  //declare these variables to be used as values on text inputs
  let trkNum;
  let nickname;

  //functions for creating new package and clearing form
  const newPackage = (event) => {
    event.preventDefault();

    axios
      .post(
        `api/packages/add_item?tracking_number=${localState.trkNumNew}&nickname=${localState.newNickname}&description=${localState.newDescription}`
      )
      .then(() => {
        addNewPackage(localState.trkNumNew);
      })
      .then(() => {
        resetState();
      })
      .catch((err) => {
        console.log(err);
      });

      document.getElementById("add-package-form").reset();
      document.getElementById("add-package-form").style.display = "none";
  
      document.getElementById("add-button").style.display = "block";
    };




  const resetState = function () {
    setLocalState((prev) => ({
      ...prev,
      trkNumNew: "",
      newNickname: "",
      newDescription: "",
    }));
  };

  //to pass to button to show create form
  const showForm = function () {
    document.getElementById("add-button").style.display = "none";

    document.getElementById("add-package-form").style.display = "block";
  };



  return (
    <main className="package-manager">

      <form id="trkNum-search-form" autoComplete="off" onSubmit={searchByTrackingNum}>
        <input
          id="trkNum-search-form-value"
          type="text"
          placeholder="Search By Tracking Number"
          onClick={() => {document.getElementById("trkNum-error").style.display = "none"}}
          value={trkNum}
          onChange={(event) => {trkNum = event.target.value}}
        />
      </form>

      <form id="nickname-search-form" autoComplete="off" onSubmit={searchByNickname}>
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
