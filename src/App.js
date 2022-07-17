import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RobotList from "./components/RobotList";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="headerContainer">
        <Header />
      </div>

      <div className="headerContainer">
        <RobotList robots={robots} />
      </div>
    </div>
  );
}

export default App;
