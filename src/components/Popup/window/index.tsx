import React from "react";
import { Buying } from "./buying";
import { Default } from "./default";
import { Goal } from "./goal";
import * as S from "./window.style";

export const Window = ({ state }) => {
  return (
    <S.Window>
      {state === 1 && <Default />}
      {state === 2 && <Buying />}
      {state === 3 && <Goal />}
    </S.Window>
  );
};
