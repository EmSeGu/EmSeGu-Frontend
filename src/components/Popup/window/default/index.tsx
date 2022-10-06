import React from "react";
import * as S from "../default.style";

export const Default = () => {
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
          <S.Price>10</S.Price>
          <S.Text>주</S.Text>
        </S.Quantity>
      </S.Select>
      <S.BtnBox>
        <S.Button color="#BC88FF">매수</S.Button>
        <S.Button color="#9AA4FF">매도</S.Button>
      </S.BtnBox>
    </S.DefaultBox>
  );
};
