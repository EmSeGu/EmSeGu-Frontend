import React from "react";
import Possession from "../../components/home/possession";
import CardList from "../../components/home/possession/card";
import { StockInfo } from "../../components/home/Stock";

const MainPage = () => {
  return (
    <div>
      <Possession />
      <CardList />
      <StockInfo />
    </div>
  );
};

export default MainPage;
