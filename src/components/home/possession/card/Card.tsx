import React from "react";
import * as Cards from "./card.style";

const Card = () => {
  return (
    <Cards.CardContainer>
      <Cards.Graph>
        <svg width="240" height="90">
          <polyline points="0,50 20,50 40,35"></polyline>
        </svg>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </Cards.Graph>
      <Cards.Des>
        <Cards.DesTitle>삼성전자</Cards.DesTitle>
        <Cards.DesColumn>
          <div className="p1">평단가</div>
          <div className="p2">56,000원</div>
          <div className="p1">보유량</div>
          <div className="p2">10주</div>
        </Cards.DesColumn>
        <Cards.DesColumn>
          <div className="p1">총 수익</div>
          <div className="p2">+ 0.27%</div>
        </Cards.DesColumn>
      </Cards.Des>
    </Cards.CardContainer>
  );
};

export default Card;
