import React from "react";
import Card from "./Card";

import styled from "styled-components";

const List = styled.div`
  display: flex;
  gap: 20px;

  width: 904px;
  position: relative;
`;

const Next = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border: 0.4px solid #8e8e8e;

  position: absolute;
  top: calc(50% - 24px);
  right: 10px;

  border-radius: 50%;
`;

const CardList = () => {
  return (
    <List>
      <Card />
      <Card />
      <Card />
      <Next />
    </List>
  );
};

export default CardList;
