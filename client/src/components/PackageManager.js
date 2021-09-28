import React from "react";
import './PackageManager.scss';
import { useState } from "react";
import axios from "axios";

export default function PackageManager() {
  const [ trkNumSearch, setTrkNumSearch ]= useState("");
  const [ trkNumNew, setTrkNumNew ]= useState("");

  const fetchData = (event) => {
    event.preventDefault()
    //sending the tracking number to a custom route with trknum as parameter
    axios
      .get(`/api/getpackage?tracking_number=${trkNumSearch}`) 
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const newPackage = () => {
  //   axios
  //     .post(`/api/packages?tracking_number=${trkNumNew}`) 
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <main className="package-manager">

      <form id="search-form" autoComplete="off" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Search By Tracking Number"
          value={trkNumSearch}
          onChange={event => {
            setTrkNumSearch(event.target.value);
          }}
        />
      </form>
      <button 
        type="submit" 
        form="search-form" 
      >
          Search
      </button>
      <div>HERE IS THE PACKAGE:</div>

      <form id="add-package-form">
      <input
          type="text"
          placeholder="Enter a new tracking number +"
          value={trkNumNew}
          onChange={event => {
            setTrkNumNew(event.target.value);
          }}
        />
      </form>
      <button 
        type="submit" 
        form="add-package-form" 
        // onClick={() => newPackage()}
        >Track This Package
      </button>
    </main>
  );
};


