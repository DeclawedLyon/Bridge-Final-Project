import React, {useState} from 'react';

export default function SmsForm(props) {
  const [sms, setSms] = useState('');
  const [number, setNumber] = useState('');

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
        mobile_number: '1' + number,
        message: sms,
    }
   
    fetch('http://localhost:3001/sms_messages/', {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            accepts: "application/json"
        },
        body: JSON.stringify(smsObj)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

  const handleChange = (event) => {
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    } else if (event.target.name === 'sms') {
      setSms(event.target.value);
    }
  }

  return (
    <div>
      <header>Send SMS Message!</header>
      <form onSubmit={sendSms}>
        <label>Mobile Number:</label>
        <input name='number' onChange={handleChange}></input>
        <label>Message:</label>
        <textarea name='sms' onChange={handleChange}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
