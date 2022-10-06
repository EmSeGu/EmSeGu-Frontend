import React from "react";
import * as S from "./goal.style";

export const Goal = ({ choose }) => {
  const change = (e) => {
    choose(e.target.value);
  };
  return (
    <S.GoalBox>
      <S.Title>일년 뒤까지...</S.Title>
      <S.Date>2022.10.05 ~ 2023.10.04</S.Date>
      <S.YieldGoalBox>
        <S.Text>수익률</S.Text>
        <S.YieldGoal onChange={change} />
        <S.Text>%</S.Text>
        <S.Text>상승!</S.Text>
      </S.YieldGoalBox>
      <S.Button>목표 세우기</S.Button>
    </S.GoalBox>
  );
};
