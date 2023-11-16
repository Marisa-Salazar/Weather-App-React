import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <footer>
        This project was coded by Marisa Salazar and is open-sourced on
        <a
          className="App-link"
          href="https://github.com/Marisa-Salazar/Weather-App-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github{" "}
        </a>
      </footer>
    </div>
  );
}
