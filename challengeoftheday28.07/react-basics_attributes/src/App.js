import React from "react";
import "./styles.css";

export default function App() {
  return <article className="article">
    <h2 className="article__title">Text of my choice</h2>
    <label htmlFor="input">Type in Text:</label>
      <input type="text" id="input"></input>
      <a href="https://de.wikipedia.org/wiki/React" className="article__link">Link</a>
    
    </article>;
}
