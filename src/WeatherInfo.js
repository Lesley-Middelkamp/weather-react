import React from "react"
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props){
return(
<div className="WeatherInfo">
<h2> {props.data.city}</h2>
<ul>
<li> 
  <FormattedDate date= {props.data.date}/>
 </li>
<li className= "text-capitalize">
   {props.data.description}</li>
 </ul>
 <div className="row">
  <div className="col-6">
   <img className= "text-capitalize"
   src={props.data.iconUrl}
   alt  ={props.data.description}
   />
<div className="float-left">
  <span className= "temperature">
    {Math.round(props.data.temperature)}
  </span>
  <span className="unit">℃</span>
  </div>

<div className="col-6">
  <ul>
<li>Humidity: {props.data.humidity} %</li>
<li>Wind: {props.data.wind}  km/h</li>
<li>Precipitation %</li>
</ul>
</div>
</div>
</div>
</div>
);
}
