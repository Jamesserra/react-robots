import React from "react";

const RobotList = ({ robots }) => {
  return (
    <div className="robotList">
      {robots.map((robot) => (
        <p>{robot.name}</p>
      ))}
    </div>
  );
};

export default RobotList;
