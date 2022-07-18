import React from "react";
// import { Card } from "@material-ui/core";
// import { Box } from "@material-ui/core";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 style={{ textAlign: "center" }}>Robot Users</h1>
      <div className="inputData">
        <div className="inputSort">
          <button>Sort Alphabetically</button>
          <button>Sort Reverse Alphabetically</button>
        </div>
        <div>
          <input />
        </div>
        <div className="inputForm">
          <input />
          <input />
          <input />
          <input />
        </div>
      </div>
    </div>
  );
};

export default Header;
