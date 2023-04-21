import React, { useState, useEffect } from "react";
import "./App.css";
import Digimon from "./components/Digimon";
// import Up from "./components/RightButton.js";
// import Down from "./components/LeftButton";
const App = () => {
    return (
      <div className="container">
        <header>The Digimon Toyota-thon Special:</header>
        <Digimon />
      </div>
  );
};
export default App;

