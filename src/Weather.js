import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import yellowsun from "./images/yellowsun.png";
import { Container, Row, Col } from "react-bootstrap";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function searchCity(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function Search() {
    const apiKey = "e46c43536b53db7462b3c442cf88a50c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(searchCity);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    Search();
  }

  if (weatherData.ready) {
    return (
      <div className="main">
        <div className="part-one">
          <form onSubmit={handleSubmit} className="form search-form row">
            <div className="form-group col-6">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="form-group col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-button"
              />
            </div>
            <div className="form-group col-2">
              <button className="form-button geolocalization">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="main-card">
          <div className="main-card card-body">
            <section className="second-card">
              <div className="second-card-body">
                <div className="row">
                  <div className="col-sm-8">
                    <h4> {weatherData.city}</h4>
                    <h5 className="card-text text-capitalize">
                      {weatherData.description}
                    </h5>
                    <div className="float-left">
                      <WeatherIcon />
                      <img className="img-left" src={yellowsun} alt="Sun" />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="card third-card">
                      <div className="card-title third-card-title">
                        {" "}
                        <FormattedDate date={weatherData.date} />
                        <br />{" "}
                        <span className="third-card-title temperature">
                          {weatherData.temperature}
                        </span>
                        °
                        <a href="#" className="celsius">
                          C
                        </a>
                        /{" "}
                        <a href="#" className="farenheit">
                          F
                        </a>
                      </div>
                      <hr className="col-xs-12 third-card-line" />
                      <div className="row row-cols-2">
                        <div className="col"> FEELS LIKE </div>
                        <div className="col">10° C</div>
                        <div className="col">HUMIDITY</div>
                        <div className="col">{weatherData.humidity}%</div>
                        <div className="col">WIND</div>
                        <div className="col">{weatherData.wind} km/h</div>
                        <div className="col">MAX</div>
                        <div className="col">17°</div>
                        <div className="col">MIN</div>
                        <div className="col">11°</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Container fluid className="forecast">
          <Row>
            <Col>
              <div className="card card-day1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <img
                    className="img-day1"
                    src="src/images/cloudy-sun.png"
                    className="card-img-top"
                    alt="cloudy"
                  />
                  <p className="card-text-days">
                    ▲ 17° C <br /> ▼ 11° C
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card card-day2">
                <div className="card-body">
                  <h5 className="card-title">Tuesday </h5>
                  <img
                    src="src/images/rain.png"
                    class="card-img-top img-day2"
                    alt="rain"
                  />
                  <p className="card-text-days">
                    ▲ 17° C <br /> ▼ 11° C
                  </p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card card-day3">
                <div className="card-body">
                  <h5 className="card-title">Wednesday</h5>
                  <img
                    src="src/images/storm.png"
                    class="img-day3 card-img-top"
                    alt="storm"
                  />
                  <p className="card-text-days">
                    ▲ 17° C <br /> ▼ 11° C
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card card-day4">
                <div className="card-body">
                  <h5 className="card-title">Thursday</h5>
                  <img
                    src="src/images/cloudy-sun2.png"
                    className="img-day4 card-img-top"
                    alt="cloudy2"
                  />
                  <p className="card-text-days">
                    ▲ 17° C <br /> ▼ 11° C
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card card-day5">
                <div className="card-body">
                  <h5 className="card-title">Friday</h5>
                  <img
                    src="src/images/fog.png"
                    className="img-day5 card-img-top"
                    alt="fog"
                  />
                  <p className="card-text-days">
                    ▲ 17° C <br /> ▼ 11° C{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    Search();
    return "ciao tonto";
  }
}
