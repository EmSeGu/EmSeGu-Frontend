import React, { useState } from "react";
import * as S from "./popup.style";
import { Window } from "./window";

export const PopUp = ({ state, choose, closePopUp }) => {
  const [states, setStates] = useState(state);
  const changeState = (number) => {
    setStates(number);
  };
  return (
    <S.Layout>
      <Window state={states} choose={choose} changeState={changeState} />
      <S.Background onClick={() => closePopUp()} />
    </S.Layout>
  );
};
