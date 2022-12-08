import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Cards";

//light / dark mode functions w/ useEffect
export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  //returns div with page content
  return (
    <>
      <div className={`App${theme}`}>
        <div className="header">
          <h1>Sherwin Williams Colors of the Year</h1>
          <button className={`button${theme}`} onClick={toggleTheme}>
            Toggle Dark Mode
          </button>
        </div>
        <Cards />
      </div>
    </>
  );
}
