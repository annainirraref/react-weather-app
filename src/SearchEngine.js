import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`it is currently 20° C in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weatherSearch">
      <form className="form-inline search-form" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            autoFocus="on"
            autoComplete="off"
            onChange={changeCity}
          />
        </div>
        <div className="form-group mb-2">
          <input type="submit" value="Search" />
        </div>
      </form>

      <div>
        <p> {message} </p>
      </div>
    </div>
  );
}
