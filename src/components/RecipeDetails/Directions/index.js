import React from "react";
import * as Styled from "./directions.style";
import Direction from "../Direction";

const Directions = ({ directions }) => {
  return (
    <Styled.DirectionsBoard>
      <h1> Directions </h1>
      {directions.map((direction, idx) => (
        <Direction key={idx} direction={direction} />
      ))}
    </Styled.DirectionsBoard>
  );
};

export default Directions;
