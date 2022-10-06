import React from "react";
import * as S from "../default.style";

export const Buying = () => {
  const addStock = () => {};

  return (
    <S.DefaultBox>
      <S.SubTitle>내 자산 수정</S.SubTitle>
      <S.Company>삼성전자</S.Company>
      <S.Select>
        <S.AveragePrice>
          <S.Text>평단가</S.Text>
          <div>
            <S.Price>56,000</S.Price>
            <S.Text>원</S.Text>
          </div>
        </S.AveragePrice>
        <S.Quantity>
          <S.AmountSelect placeholder="0" />
          <S.Text>주</S.Text>
        </S.Quantity>
      </S.Select>
      <S.AddButton onClick={addStock}>추가하기</S.AddButton>
    </S.DefaultBox>
  );
};
