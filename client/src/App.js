import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
      phrase: "Can I change this data?",
      repetitions: 0,
      textArray: []
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };
  grabData = () => {
    axios
      .get("/api/tester") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.phrase); // The entire response from the Rails API

        console.log(response.data.phrase); // Just the message
        this.setState({
          phrase: response.data.phrase,
        });
      });
  };


  handleClick = () => {
    const textArray = ["bitchin"];
    console.log(this.state.repetitions)
    this.setState({repetitions: this.state.repetitions + 1})
    for (let i = 0; i < this.state.repetitions; i++) {
      this.state.textArray.push(<span key={i}>I like this text</span>);
    }
    console.log(textArray)
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>{this.state.message}</h1>
          <button onClick={this.fetchData}>Fetch Data</button>
        </div>
        <br/>
        <div className="App">
          <h1>{this.state.phrase}</h1>
          <button onClick={this.grabData}>Change Phrase</button>
        </div>
        <br/>
        <div>
          <div className="App Container">
            <h1>{this.state.textArray}</h1>
            <button onClick={this.handleClick}>Add Box</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
