import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RobotList from "./components/RobotList";
import Scroll from "./components/Scroll";
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
      }}
    >
      <Header robots={robots} setRobots={setRobots} />
      <Scroll>
        <RobotList robots={robots} setRobots={setRobots} />
      </Scroll>
    </div>
  );
}

export default App;
