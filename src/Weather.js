import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine.js";

export default function Weather() {
  return (
    <div className="main-card">
      <div className="main-card card-body">
        <header className="main-card title">
          <div className="subheader form row">
            <div className="col-sm">
              <SearchEngine />
            </div>
          </div>
        </header>

        <br />
        <br />

        <section className="second-card">
          <p className="second-card-text weather" id="weather-description">
            {weatherData.description}
          </p>

          <div className="second-card-body">
            <div className="row">
              <div className="row col-sm-8">
                <img
                  className="img-left"
                  src="src/images/yellowsun.jpg"
                  alt="Sun"
                />
              </div>

              <div className="row col-sm-4">
                <div className="card third-card">
                  <div className="card-title third-card-title">
                    {" "}
                    <span className="third-card-title today">
                      {weatherData.date}{" "}
                    </span>
                    <br />{" "}
                    <span className="third-card-title temperature">
                      {" "}
                      {weatherData.temperature}{" "}
                    </span>{" "}
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
                    <div className="col">MAX</div>
                    <div className="col">17°</div>
                    <div className="col">MIN</div>
                    <div className="col">11°</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-deck">
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

            <div className="card card-day5"> </div>
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
        </section>
      </div>
    </div>
  );
}
