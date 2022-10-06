import React from "react";
import * as Pos from "./possession.style";

const Possession = () => {
  return (
    <Pos.Container>
      <Pos.PossesionContainer>
        <Pos.Title>수익률 8% 달성 목표까지</Pos.Title>
        <Pos.Flex>
          <Pos.Target>1.5% | 256일 남았어요!</Pos.Target>
        </Pos.Flex>
      </Pos.PossesionContainer>
      <Pos.PossesionContainer>
        <Pos.Title>보유자산</Pos.Title>
        <Pos.Flex>
          <Pos.Money>2,432,090원</Pos.Money>
          <Pos.Change>- 27,147원 (-0.01%)</Pos.Change>
        </Pos.Flex>
      </Pos.PossesionContainer>
    </Pos.Container>
  );
};

export default Possession;
