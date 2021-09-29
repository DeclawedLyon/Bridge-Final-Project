import React from "react";
import './Viewer.scss';

export default function Viewer(props) {
  console.log(props)
 return (
  <main className="viewer">
    <p>I'm the viewer component!</p>
    <div className="description">
      <h3>Description:</h3>
      <p>{props.description}</p>

    </div>
  </main>
 ) ;
}
