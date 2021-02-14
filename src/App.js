  
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ripley" />

  <footer>Source Code by Lesley Middelkamp
  <a 
  href = "https://github.com/Lesley-Middelkamp/weather-react"
  target="_blank"> Github</a>
  </footer>
      </div>
    </div>
  );
}