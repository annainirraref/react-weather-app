import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "src/icons/sunny.png",
    "01n": "src/icons/clear sky.png",
    "02d": "src/icons/few clouds d.png",
    "02n": "src/icons/few clouds n.png",
    "03d": "src/icons/scattered clouds.png",
    "03n": "src/icons/scattered clouds.png",
    "04d": "src/icons/light clouds d.png",
    "04n": "src/icons/light clouds n.png",
    "09d": "src/icons/shower rain d.png",
    "09n": "src/icons/shower rain n.png",
    "10d": "src/icons/rain.png",
    "10n": "src/icons/rain.png",
    "11d": "src/icons/thunder.png",
    "11n": "src/icons/thunder.png",
    "13d": "src/icons/snow.png",
    "13n": "src/icons/snow.png",
    "50d": "src/icons/mist.png",
    "50n": "src/icons/mist.png",
  };

  return;
  <div> {codeMapping[props]}</div>;
}
