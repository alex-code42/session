import React, { useState } from 'react';
import "./styles.css";

export default function App() {

  const [MyFavDate, setmyFavDate] = useState("?");
  const [MyFavHolliday, setmyFavHolliday] = useState("?");


  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;

    setmyFavDate(formElements[1].value)
    
    
    setmyFavHolliday(formElements[0].value)
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{MyFavHolliday}</span>
      </p>
      <p>
        Date: <span className="output">{MyFavDate}</span>
      </p>
    </div>
  );
}
