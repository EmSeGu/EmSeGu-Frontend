import React, { useEffect, useState } from "react";
import StockApi from "../../../api/stock/Stock.api";
import * as Pos from "./possession.style";

const Possession = () => {
  const [value, setValue] = useState<any>(0);
  const getMoeny = async () => {
    const v = await StockApi.money();
    setValue(v.money);
  };

  useEffect(() => {
    getMoeny();
  }, []);

  const [goal, setGoal] = useState(null);

  return (
    <Pos.Container>
      <Pos.PossesionContainer>
        {goal ? (
          <>
            <Pos.Title>수익률 8% 달성 목표까지</Pos.Title>
            <Pos.Flex>
              <Pos.Target>1.5% | 256일 남았어요!</Pos.Target>
            </Pos.Flex>
          </>
        ) : (
          <Pos.Title>
            일년간의 투자 목표를 세워보세요! 목표 세우러 가기
          </Pos.Title>
        )}
      </Pos.PossesionContainer>
      <Pos.PossesionContainer>
        <Pos.Title>보유자산</Pos.Title>
        <Pos.Flex>
          <Pos.Money>{value}원</Pos.Money>
          <Pos.Change>0원 (+0.00%)</Pos.Change>
        </Pos.Flex>
      </Pos.PossesionContainer>
    </Pos.Container>
  );
};

export default Possession;
