import React from "react";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import "./PriorityPkgs.scss";

export default function PriorityPkgs() {
  const { state  } = useContext(stateContext);

  return (
    <main className="priority-container">
    
    </main>
  );
}