import React from "react";
import { Buying } from "./buying";
import { Default } from "./default";
import { Goal } from "./goal";
import { Paying } from "./Paying";
import * as S from "./window.style";

export const Window = ({ state, choose, changeState }) => {
  return (
    <S.Window>
      {state === 1 && <Default choose={choose} changeState={changeState} />}
      {state === 2 && <Buying choose={choose} />}
      {state === 3 && <Paying choose={choose} />}
    </S.Window>
  );
};
