import React from "react";
import "./styles.css";

import Temperature from "./Temperature";
import CelFarh from "./CelFarh";
import WeatherInfo from "./WeatherInfo";
import Sourcecode from "./Sourcecode";

export default function App() {
  return (
    <div className="App">
      <div className="container">
    
      <Temperature defaultCity= "New York"  />
      <CelFarh />
      <Sourcecode />
      
    </div>
    </div>
  );
}