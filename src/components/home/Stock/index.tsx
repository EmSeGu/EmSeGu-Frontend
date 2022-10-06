import React, { useState } from "react";
import { PopUp } from "../../Popup";
import * as S from "./stock.style";

export const StockInfo = () => {
  const [clickedNav, setClickedNav] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const changeList = (nav: boolean) => {
    if (nav === false) {
      setClickedNav((cl) => !cl);
    }
  };

  return (
    <S.StockLayout>
      {isClicked && <PopUp state={1} closePopUp={() => setIsClicked(false)} />}
      <S.NavBox>
        <S.NavItem clicked={clickedNav} onClick={() => changeList(clickedNav)}>
          국내 증시
        </S.NavItem>
        <S.NavItem
          clicked={!clickedNav}
          onClick={() => changeList(!clickedNav)}
        >
          관심 투자 정보
        </S.NavItem>
      </S.NavBox>
      <div style={{ width: "100%" }}>
        <S.Table>
          <S.TableHead>
            <S.TableFrame>
              <S.TableHeadItem>차트</S.TableHeadItem>
              <S.TableHeadName>이름</S.TableHeadName>
              <S.TableHeadItem>ROE</S.TableHeadItem>
              <S.TableHeadItem>PER</S.TableHeadItem>
              <S.TableHeadItem>PBR</S.TableHeadItem>
              <S.TableHeadItem>현재 주가</S.TableHeadItem>
              <S.TableHeadItem>배당금</S.TableHeadItem>
              <S.TableHeadItem>수익률</S.TableHeadItem>
              <S.TableHeadItem>배당성향</S.TableHeadItem>
            </S.TableFrame>
          </S.TableHead>
          <tbody>
            <S.TableFrame onClick={() => setIsClicked(true)}>
              <S.TableItem>
                <S.Graph>
                  <svg>
                    <polyline points="15,40 35,10 55,30"></polyline>
                  </svg>
                </S.Graph>
              </S.TableItem>
              <S.TableName>삼성전자</S.TableName>
              <S.TableItem>1.5%</S.TableItem>
              <S.TableItem>3.4배</S.TableItem>
              <S.TableItem>5.1배</S.TableItem>
              <S.TableItem>56,000</S.TableItem>
              <S.TableItem>56,000</S.TableItem>
              <S.TableYield state={"positive"}>+ 0.65%</S.TableYield>
              <S.TableItem>30%</S.TableItem>
            </S.TableFrame>
            <S.TableFrame onClick={() => setIsClicked(true)}>
              <S.TableItem>
                <S.Graph>
                  <svg>
                    <polyline points="15,40 35,10 55,30"></polyline>
                  </svg>
                </S.Graph>
              </S.TableItem>
              <S.TableName>삼성전자</S.TableName>
              <S.TableItem>1.5%</S.TableItem>
              <S.TableItem>3.4배</S.TableItem>
              <S.TableItem>5.1배</S.TableItem>
              <S.TableItem>56,000</S.TableItem>
              <S.TableItem>56,000</S.TableItem>
              <S.TableYield state={"negative"}>- 0.65%</S.TableYield>
              <S.TableItem>30%</S.TableItem>
            </S.TableFrame>
          </tbody>
        </S.Table>
      </div>
    </S.StockLayout>
  );
};
