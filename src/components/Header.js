import React, { useState } from "react";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Header = ({ robots, setRobots }) => {
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
        <div>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
        <form className="inputForm">
          <TextField required id="filled-basic" label="Name" variant="filled" />
          <TextField
            required
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            required
            id="filled-basic"
            label="Phone Number"
            variant="filled"
          />
          <Button variant="contained">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
