import React from "react";
import * as News from "./news.style";

const NewsItem = ({ title, des }) => {
  return (
    <News.ItemContainer>
      <News.CompanyDate>아시아경제 | 2022.09.28</News.CompanyDate>
      <News.ItemTitle>{title}</News.ItemTitle>
      <News.ItemDes>{des}</News.ItemDes>
    </News.ItemContainer>
  );
};

export default NewsItem;
