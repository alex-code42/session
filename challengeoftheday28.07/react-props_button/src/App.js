import React from "react";
import "./styles.css";

export default function App() {
  
  const handleClick = () => {
   
    console.log("Whatsup");
  };

  return (
    <h1>
      <Button style={{ height: "200px" }} color={"#ffff00"} isdisabled={false} text={"BUTTON"} onClick={handleClick} />
    </h1>
  );
}

function Button({ color, isdisabled, text, onClick }) {
  return (
    <button disabled={isdisabled} style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}