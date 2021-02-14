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
    if (ready)  {
    return(
      <div className="Temperature">
       <h2> {weatherData.city}</h2>
       <ul> 
         <li>
           <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
          </ul> 
          <div className="row">
            <div className="col-6">
              <img 
              className="text-capitalize"
              src={weatherData.iconUrl}
              alt={weatherData.description}
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">℃</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity} %</li>
                </ul>
              </div>
            </div>

          </div>
      </div>
    )
  }  
}