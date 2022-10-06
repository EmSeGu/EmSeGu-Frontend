import React from "react";
import NewsList from "../../components/home/news/NewsList";
import Possession from "../../components/home/possession";
import CardList from "../../components/home/possession/card";

const MainPage = () => {
  return (
    <>
      <div>
        <Possession />
        <CardList />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <NewsList />
      </div>
    </>
  );
};

export default MainPage;
