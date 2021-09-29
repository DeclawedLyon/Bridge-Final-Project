import React from "react";
import "./Viewer.css";

export default function Viewer(props) {
  return (
    <main className="viewer">
      <p>I'm the viewer component!</p>
      <div>
        <p>{props.trkNum}</p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <p>{props.sentTo}</p>
      </div>
      <div>
        <p>{props.sentFrom}</p>
      </div>
    </main>
  );
}
