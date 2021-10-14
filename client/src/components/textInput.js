import React, { useState } from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./textInput.scss";

export default function SmsForm(props) {
  const [sms, setSms] = useState("");
  const [number, setNumber] = useState("");

  const { state, addTextAlert } = useContext(stateContext);

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
      mobile_number: "1" + number,
      message: sms,
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

  const handleChange = (event) => {
    if (event.target.name === "number") {
      setNumber(event.target.value);
    } else if (event.target.name === "sms") {
      setSms(event.target.value);
    }
  };

  console.log("the state withing SMS Form: ", state.thisPackage);

  return (
    <div className="textContainer">
      <header>Send SMS Message!</header>
      <form className="text_form" onSubmit={sendSms}>
        <div className="number_input">
          <label>Mobile Number:</label>
          <input name="number" onChange={handleChange}></input>
        </div>
      </form>
      <button
        className="set-alert"
        onClick={() => addTextAlert(state.thisPackage.id)}
      >
        Set Alert
      </button>
    </div>
  );
}
