import React from "react";
import Card from "./Card";

const RobotList = ({ robots, setRobots }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            phone={robots[i].phone}
            robots={robots}
            setRobots={setRobots}
          />
        );
      })}
    </div>
  );
};

export default RobotList;
