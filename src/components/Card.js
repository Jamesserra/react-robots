import React from "react";
import { Button } from "@mui/material";

const Card = ({ name, email, id, robots, setRobots }) => {
  function deleteRobot(robotID) {
    let copy = robots.filter((robot) => robot.id != robotID);
    setRobots(copy);
  }

  return (
    <div className="robotCard">
      <div className="button">
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => deleteRobot(id, setRobots)}
        >
          X
        </Button>
      </div>
      <img src={`https://robohash.org/${id}?200x200`} alt="ET" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
