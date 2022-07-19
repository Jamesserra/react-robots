import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RobotList from "./components/RobotList";
import Scroll from "./components/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [filterRobots, setFilteredRobots] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
      <Header
        robots={robots}
        setRobots={setRobots}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFilteredRobots={setFilteredRobots}
      />
      {searchInput.length > 1 ? (
        <Scroll>
          <RobotList robots={filterRobots} setRobots={setRobots} />
        </Scroll>
      ) : (
        <Scroll>
          <RobotList robots={robots} setRobots={setRobots} />
        </Scroll>
      )}
    </div>
  );
}

export default App;
