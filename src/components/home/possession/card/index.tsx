import React, { useEffect, useState } from "react";
import Card from "./Card";

import styled from "styled-components";
import StockApi from "../../../../api/stock/Stock.api";

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
  const [list, setList] = useState([]);
  const get = async () => {
    const value = await StockApi.myStock();
    setList(value);
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <List>
      {list.map((v) => (
        <Card v={v} />
      ))}
      <Next></Next>
    </List>
  );
};

export default CardList;
