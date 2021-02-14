import React, {useState} from "react";
import "./temperature.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function Temperature(props){
  let [ready, setReady]= useState(false)
  let [weatherData, setweatherData]=useState({});
  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      wind:response.data.wind.speed,
      city: response.data.name,
      description:response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date (response.data.dt *1000)
    })
    setReady(true)
  }

  






  
}