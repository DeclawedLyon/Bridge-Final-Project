import React from "react";
import './Viewer.css';

export default function Viewer(props) {
 return (
  <main className="viewer">
    <p>I'm the viewer component!</p>
    <p>{props.description}</p>
  </main>
 ) ;
}
