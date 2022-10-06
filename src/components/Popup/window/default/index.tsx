import React, { useEffect, useState } from "react";
import StockApi from "../../../../api/stock/Stock.api";
import * as S from "../default.style";

export const Default = ({ choose, changeState }) => {
  const [value, setValue] = useState<any>();
  const getZ = async () => {
    const a = await StockApi.getTargetStock(choose.name);
    setValue(a);
  };

  useEffect(() => {
    getZ();
  }, []);

  return (
    <S.DefaultBox>
      <S.SubTitle>내 자산 수정</S.SubTitle>
      <S.Company>{value && value.name}</S.Company>
      <S.Select>
        <S.AveragePrice>
          <S.Text>평단가</S.Text>
          <div>
            <S.Price>{value && value.price}</S.Price>
            <S.Text>원</S.Text>
          </div>
        </S.AveragePrice>
        <S.Quantity>
          <S.Price>0</S.Price>
          <S.Text>주</S.Text>
        </S.Quantity>
      </S.Select>
      <S.BtnBox>
        <S.Button color="#BC88FF" onClick={() => changeState(2)}>
          매수
        </S.Button>
        <S.Button color="#9AA4FF" onClick={() => changeState(3)}>
          매도
        </S.Button>
      </S.BtnBox>
    </S.DefaultBox>
  );
};
