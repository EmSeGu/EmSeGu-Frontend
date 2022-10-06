import React from "react";
import NewsList from "../../components/home/news/NewsList";
import Possession from "../../components/home/possession";
import CardList from "../../components/home/possession/card";
import { StockInfo } from "../../components/home/Stock";

const MainPage = () => {
  return (
    <>
      <div>
        <Possession />
        <CardList />
        <StockInfo />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <NewsList />
      </div>
    </>
  );
};

export default MainPage;
