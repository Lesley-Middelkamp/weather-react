import React from "react";
import "./styles.css";
import Search from "./Search";
import Temperature from "./Temperature";
import CelFarh from "./CelFarh";
import Humwind from "./Humwind";
import Sourcecode from "./Sourcecode";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
export default function App() {
  return (
    <div className="App">
      <Search />
      <Temperature />
      <CelFarh />
      <Humwind />
      <Sourcecode />
    </div>
  );
}