import React from "react";
import './PackageManager.scss';
import { useState } from "react";
import axios from "axios";

export default function PackageManager() {
  //if you add all of the column names to state you can access the whole package in the browser; the setup below (selectedPackage) is not working

  const [state, setState] = useState({
    trkNumNew: "",
    trkNumSearch: "",
    selectedPackage: {}
  });
 
  
  const fetchData = (event) => {
    event.preventDefault()
    //sending the tracking number to a custom route with trknum as parameter
    axios
      .get(`/api/getpackage?tracking_number=${state.trkNumSearch}`) 
      .then((response) => {
        console.log(response.data[0])
        setState({
          selectedPackage: {}
        })
        console.log(state.selectedPackage);
        let frm = document.getElementById('search-form')
        frm.reset();
      })
  }

  // const newPackage = (event) => {
  //   axios
  //     .post(`/api/packages?tracking_number=${trkNumNew}`) 
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const handleChange = function(event) {
    setState({
      trkNumSearch: event.target.value,
    })
  }

  return (
    <main className="package-manager">

      <form id="search-form" autoComplete="off" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Search By Tracking Number"
          value={state.trkNumSearch}
          onChange={(event) => {
            handleChange(event)}}
        />
      </form>
      <button 
        type="submit" 
        form="search-form" 
      >
          Search
      </button>
      <div>HERE IS THE PACKAGE:{state.trkNumSearch}{state.description}</div>

      <form id="add-package-form">
      <input
          type="text"
          placeholder="Enter a new tracking number +"
          value={state.trkNumNew}
          onChange={event => {
            setState({
              trkNumNew: event.target.value,
          })}}
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


