import React from "react";
import "./styles.css";

export default function App() {
  return (
  <h1>
    <br></br>
    <Smiley ishappy={true} />
    <br></br>
    <Smiley ishappy={false} />
  </h1>
  )
}

function Smiley({ishappy}){
  return ishappy ? "😀" : "🤢";
}