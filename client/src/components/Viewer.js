import React from "react";
import "./Viewer.scss";

export default function Viewer(props) {
<<<<<<< HEAD
  return (
    <main className="viewer">
      <p>I'm the viewer component!</p>
      <p>{props.description}</p>
    </main>
  );
=======
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
>>>>>>> d6245e977df8f8a76a554245c76fc7600be25fe1
}
