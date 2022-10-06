import React, { useEffect, useState } from "react";
import StockApi from "../../../api/stock/Stock.api";
import { PopUp } from "../../Popup";
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
  const [isClicked, setIsClicked] = useState(false);
  const [clickedNav, setClickedNav] = useState(true);

  const changeList = (nav: boolean) => {
    if (nav === false) {
      setClickedNav((cl) => !cl);
    }
  };

  return (
    <Pos.Container>
      <Pos.PossesionContainer>
        {goal && !isClicked ? (
          <>
            <Pos.Title>수익률 {goal}% 달성 목표까지</Pos.Title>
            <Pos.Flex>
              <Pos.Target>{goal}% | 256일 남았어요!</Pos.Target>
            </Pos.Flex>
          </>
        ) : (
          <>
            <Pos.Title onClick={() => setIsClicked(true)}>
              일년간의 투자 목표를 세워보세요! 목표 세우러 가기
            </Pos.Title>
            {isClicked && (
              <PopUp
                state={4}
                choose={setGoal}
                closePopUp={() => setIsClicked(false)}
              />
            )}
          </>
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
