import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="robotCard">
      <img src={`https://robohash.org/${id}?200x200`} alt="ET" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
