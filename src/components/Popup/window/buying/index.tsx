import React, { useState } from "react";
import StockApi from "../../../../api/stock/Stock.api";
import * as S from "../default.style";

export const Buying = ({ choose }) => {
  const [count, setCount] = useState<any>(0);

  const addStock = async () => {
    const value = await StockApi.buyStock(choose.name, Number(count));
  };

  return (
    <S.DefaultBox>
      <S.SubTitle>내 자산 수정</S.SubTitle>
      <S.Company>{choose.name}</S.Company>
      <S.Select>
        <S.AveragePrice>
          <S.Text>평단가</S.Text>
          <div>
            <S.Price>{choose.price}</S.Price>
            <S.Text>원</S.Text>
          </div>
        </S.AveragePrice>
        <S.Quantity>
          <S.AmountSelect
            placeholder="0"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <S.Text>주</S.Text>
        </S.Quantity>
      </S.Select>
      <S.AddButton onClick={addStock}>추가하기</S.AddButton>
    </S.DefaultBox>
  );
};
