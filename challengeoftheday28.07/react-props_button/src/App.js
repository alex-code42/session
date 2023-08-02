import React, { useState } from 'react';
import "./styles.css";


export default function App() {

  const [showArticle, setShowArticle] = useState(false);
  const handleClick = () => {
  setShowArticle(!showArticle);
  };

  return (
    <div>
      <Button style={{ height: "200px" }} color={"#ffff00"} disabled={false} text={"BUTTON"} onClick={handleClick} />
      {showArticle && <ImportantArticle name="Hubert" />}
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button disabled={disabled} style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

function ImportantArticle({ name }) {
  return (
    <article className="myarticle">
      <h1>This is an important article</h1>
      <p>This text is about the very important article about {name}</p>
    </article>
  );
}
