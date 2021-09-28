import React from "react";
import './PackageManager.scss';
import { useState } from "react";
import axios from "axios";

export default function PackageManager() {
  const [state, setState] = useState({
    trkNumNew: "",
    trkNumSearch: "",
    courier: "",
    created_at: "",
    date_delivered: "",
    date_sent: "",
    description: "",
    estimated_delivery: "",
    from_city_province: "",
    from_post: "",
    from_st: "",
    last_known_status: "",
    nickname: "",
    sent_from: "",
    sent_to: "",
    signed_for: "",
    to_city_province: "",
    to_post: "",
    to_st: "",
    tracking_number: "",
    updated_at: "",
  });
 

  const fetchData = (event) => {
    event.preventDefault()
    //sending the tracking number to a custom route with trknum as parameter
    axios
      .get(`/api/getpackage?tracking_number=${state.trkNumSearch}`) 
      .then((response) => {
        console.log(response.data[0])
        setState({
          courier: response.data[0].courier,
          created_at: response.data[0].created_at,
          date_delivered: response.data[0].date_delivered,
          date_sent: response.data[0].date_sent,
          description: response.data[0].description,
          estimated_delivery: response.data[0].estimated_delivery,
          from_city_province: response.data[0].from_city_province,
          from_post: response.data[0].from_post,
          from_st: response.data[0].from_st,
          last_known_status: response.data[0].last_known_status,
          nickname: response.data[0].nickname,
          sent_from: response.data[0].sent_from,
          sent_to: response.data[0].sent_to,
          signed_for: response.data[0].signed_for,
          to_city_province: response.data[0].to_city_province,
          to_post: response.data[0].to_post,
          to_st: response.data[0].to_st,
          tracking_number: response.data[0].tracking_number,
          updated_at: response.data[0].updated_at
        })
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
      trkNumNew: "",
      courier: "",
      created_at: "",
      date_delivered: "",
      date_sent: "",
      description: "",
      estimated_delivery: "",
      from_city_province: "",
      from_post: "",
      from_st: "",
      last_known_status: "",
      nickname: "",
      sent_from: "",
      sent_to: "",
      signed_for: "",
      to_city_province: "",
      to_post: "",
      to_st: "",
      tracking_number: "",
      updated_at: "",
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


