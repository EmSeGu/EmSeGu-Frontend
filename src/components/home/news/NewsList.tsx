import React, { useEffect } from "react";
import * as News from "./news.style";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsList = () => {
  return (
    <News.NewsListContainer>
      <News.Title>오늘의 경제 뉴스</News.Title>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </News.NewsListContainer>
  );
};

export default NewsList;
