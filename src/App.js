import React from "react";
import "./styles.css";
import Search from "./Search";
import Temperature from "./Temperature";
import CelFarh from "./CelFarh";
import Humwind from "./Humwind";
import Sourcecode from "./Sourcecode";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Search />
      <Temperature />
      <CelFarh />
      <Humwind />
      <Sourcecode />
    </div>
    </div>
  );
}