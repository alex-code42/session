import React from "react";
import "./styles.css";

export default function App() {
  return <h1><Sum valueA={5} valueB={8}/></h1>;
}

function Sum({valueA, valueB}){
  return <h1>{valueA+valueB}</h1>
}