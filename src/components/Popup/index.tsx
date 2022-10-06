import React from "react";
import * as S from "./popup.style";
import { Window } from "./window";

export const PopUp = ({ state, closePopUp }) => {
  return (
    <S.BackGround onClick={() => closePopUp()}>
      <Window state={state} />
    </S.BackGround>
  );
};
