import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";
import "./Weather.scss";

// fontawsome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLocationArrow,
//   faThermometerHalf,
//   faThermometerFull,
//   faThermometerEmpty,
//   faTint
// } from "@fortawesome/free-solid-svg-icons";
// import {

// } from "@fortawesome/free-brands-svg-icons";

const Weather = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [weatherData, setWeatherData] = useState({
    name: "",
    weather: "",
    temp: "",
    humidity: "",
    feelsLike: "",
    minTemp: "",
    maxTemp: "",
    pressure: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const apiKey = "fe87d2db4c789eedcaf2f90c1fa980b8";
      const lat = location.latitude;
      const log = location.longitude;
      const query = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apiKey}&units=metric`;

      try {
        const res = await axios.get(query);
        const cityName = res.data.name;
        const weatherInfo = res.data.main;
        const weather = res.data.weather[0].main;

        const {
          temp,
          humidity,
          feels_like,
          minTemp,
          maxTemp,
          pressure,
        } = weatherInfo;

        setWeatherData({
          name: cityName,
          weather: weather,
          temp: temp,
          humidity: humidity,
          feelsLike: feels_like,
          minTemp: minTemp,
          maxTemp: maxTemp,
          pressure: pressure,
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getWeather();
  }, [location]);

  if (loading) {
    return <div className="loading ir_so">Loading</div>;
  }

  const saveLocation = (locationInfo) => {
    setLocation({
      latitude: locationInfo.coords.latitude,
      longitude: locationInfo.coords.longitude,
    });
  };

  const getNowLocation = () => {
    if (location.latitude === null && location.longitude === null) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    }
  };

  getNowLocation();

  return (
    <section id="weather">
      <h2 className="ir_so">날씨 어플리케이션</h2>
      <div className="container">
        <div className="row">
          <div className="weather">
            <div>현재 날씨는 {weatherData.weather} 입니다.</div>
            <div>현재 위치는 {weatherData.name} 입니다.</div>
            <div>현재 습도는 {weatherData.humidity}% 입니다.</div>
            <div>현재 기온는 {weatherData.temp} 입니다.</div>
            <div>현재 체감온도는 {weatherData.feelsLike} 입니다.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
