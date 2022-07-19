import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Header = ({
  robots,
  setRobots,
  searchInput,
  setSearchInput,
  setFilteredRobots,
}) => {
  let [newUser, setNewUser] = useState([
    { name: "", email: "", phone: "", id: "" },
  ]);

  function handleSort(robots) {
    let copy = [...robots].sort((a, b) => a.name.localeCompare(b.name));
    setRobots(copy);
  }

  function handleReverse(robots) {
    let copy = [...robots]
      .sort((a, b) => a.name.localeCompare(b.name))
      .reverse();
    setRobots(copy);
  }

  function handleInput(e) {
    e.preventDefault();

    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    newUser.id = parseInt(Math.random().toFixed(3).slice(2));
    setRobots([...robots, newUser]);
    e.target.reset();
  }

  function handleSearch(searchValue) {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      let copy = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredRobots(copy);
    } else {
      setRobots(robots);
    }
  }

  return (
    <div className="headerContainer">
      <h1 style={{ textAlign: "center" }}>Robot Users</h1>
      <div className="inputData">
        <div className="inputSort">
          <Button
            style={{ padding: "10px", marginBottom: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => handleSort(robots)}
          >
            Sort A-Z
          </Button>
          <Button
            style={{ padding: "10px", width: "100%" }}
            variant="contained"
            color="primary"
            onClick={() => handleReverse(robots)}
          >
            Sort Z-A
          </Button>
        </div>
        <div style={{ padding: "10px" }}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <form className="inputForm" onSubmit={handleSubmit}>
          <TextField
            required
            name="name"
            id="filled-basic"
            label="Name"
            variant="filled"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            required
            name="email"
            id="filled-basic"
            label="Email"
            variant="filled"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            required
            name="phone"
            id="filled-basic"
            label="Phone Number"
            variant="filled"
            onChange={(e) => handleInput(e)}
          />
          <Button type="submit" variant="contained">
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
