import React from "react";
import * as S from "./popup.style";
import { Window } from "./window";

export const PopUp = ({ state, closePopUp }) => {
  return (
    <S.Layout>
      <Window state={state} />
      <S.Background onClick={() => closePopUp()} />
    </S.Layout>
  );
};
