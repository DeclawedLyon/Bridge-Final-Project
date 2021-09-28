import React from "react";
import './PackageManager.scss';
import { useState } from "react";
import axios from "axios";

export default function PackageManager() {
  const [ trkNum, setTrkNum ]= useState("");

  const fetchData = () => {

    axios
      .get(`/api/getpackage?tracking_number=${trkNum}`) 
      .then((response) => {
        // handle success
        console.log(response); // The entire response from the Rails API

      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="package-manager">

      <form id="search-form" autoComplete="off">
        <input
          type="text"
          placeholder="Search By Tracking Number"
          value={trkNum}
          onChange={event => {
            setTrkNum(event.target.value);
          }}
        />
        </form>
        <button type="submit" form="search-form" onClick={() => fetchData()}>Search</button>

      <form>
        <input type="text" placeholder="Add Package +"></input>
      </form>
    </main>
  );
};


