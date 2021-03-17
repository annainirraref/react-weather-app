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
    <div className="subheader weatherSearch row">
      <div className="col-sm">
        <form className="form-inline search-form mb-5 " onSubmit={handleSubmit}>
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
            <input type="submit" value="Search" className="search-button" />
          </div>
        </form>
      </div>
      <div class="col-1">
        <button class="form-button geolocalization" id="geobutton">
          <i class="fas fa-map-marker-alt"></i>
        </button>
      </div>
    </div>
  );
}
