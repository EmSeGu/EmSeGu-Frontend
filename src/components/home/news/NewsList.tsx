import React from "react";
import * as News from "./news.style";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <News.NewsListContainer>
      <News.Title>오늘의 경제 뉴스</News.Title>
      <NewsItem
        title="[서환-마감] 强달러·파운드화 폭락 연타에 1430원대…22.00원↑"
        des="글로벌 강달러가 위세를 떨치는 가운데 국내 주식과 채권, ... 우려가 시장 불안으로 이어질 수 있는 만큼 각별한 경각심을 가지고 금융·외환시장의..."
      />
      <NewsItem
        title="추경호 “한·미 금리 역전에 높은 경각심…모든 가능성 대비"
        des="추경호 “한·미 금리 역전에 높은 경각심… ... 이달 들어 외국인 증권 자금이 주식·채권 모두 순유입세를 기록하고 있는 건 우리 경제의 펀더멘털이..."
      />
      <NewsItem
        title="폭락에 체면 구긴 국내 대표 성장주…네이버 ‘투자주의종목’ 지정"
        des="외국인들은 이틀간 네이버 주식 7330억원어치를 순매도했다. ... 한국거래소는 시장경보 제도를 '투자주의 종목-투자경고 종목-투자위험 종목'으로..."
      />
      <NewsItem
        title="'지금이라도 주식 내다 팔아라'…개미들에 '경고' 날렸다"
        des="지금부터라도 방어적인 투자를 하라는 조언이다. 7일(현지시간) 블룸버그에 따르면 아문디는 주식 시장에 관한 비관적인 전망을 투자자들에게 경고했다."
      />
    </News.NewsListContainer>
  );
};

export default NewsList;
