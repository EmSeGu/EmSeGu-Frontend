import React from "react";
import * as News from "./news.style";

const NewsItem = () => {
  return (
    <News.ItemContainer>
      <News.CompanyDate>아시아경제 | 2022.09.28</News.CompanyDate>
      <News.ItemTitle>
        화일약품 사망사고에도 주가만 신경 쓴 금호에이치티②[기로의 상장사]
      </News.ItemTitle>
      <News.ItemDes>
        금호에이치티가 화일약품에서 사망자가 발생하는 화재사고가 있었음에도
        사망자와 유가족에 대한 애도 및 사과 내용 없이...
      </News.ItemDes>
    </News.ItemContainer>
  );
};

export default NewsItem;
