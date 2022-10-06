import React, { useState, useEffect } from "react";
import StockApi from "../../../api/stock/Stock.api";
import { PopUp } from "../../Popup";
import Loader from "./Loader";
import * as S from "./stock.style";
import useList from "./useList";

export const StockInfo = () => {
  const { isLoaded, itemLists, setTarget } = useList();
  const [clickedNav, setClickedNav] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [choose, setChoose] = useState(null);

  const [list, setList] = useState<any>(null);

  const changeList = (nav: boolean) => {
    if (nav === false) {
      setClickedNav((cl) => !cl);
    }
  };

  const getList = async () => {
    const lists = await StockApi.getStockList(0);
    setList(lists);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <S.StockLayout>
      {isClicked && (
        <PopUp
          state={1}
          choose={choose}
          closePopUp={() => setIsClicked(false)}
        />
      )}
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
            {itemLists &&
              itemLists.map((v) => (
                <S.TableFrame
                  onClick={() => {
                    setIsClicked(true);
                    setChoose(v);
                  }}
                  key={v.id}
                >
                  <S.TableItem>
                    <S.Graph>
                      <svg>
                        <polyline points="15,40 35,10 55,30"></polyline>
                      </svg>
                    </S.Graph>
                  </S.TableItem>
                  <S.TableName>{v.name}</S.TableName>
                  <S.TableItem>{v.roe}%</S.TableItem>
                  <S.TableItem>{v.per}배</S.TableItem>
                  <S.TableItem>{v.pbr}배</S.TableItem>
                  <S.TableItem>{v.price}</S.TableItem>
                  <S.TableItem>{v.dividend}</S.TableItem>
                  <S.TableYield state={v.yield >= 0 ? "positive" : ""}>
                    {v.yield}%
                  </S.TableYield>
                  <S.TableItem>{v.dividendPayout}%</S.TableItem>
                </S.TableFrame>
              ))}
            <Loader.Container setTarget={setTarget}>
              <Loader isLoaded={isLoaded} />
            </Loader.Container>
          </tbody>
        </S.Table>
      </div>
    </S.StockLayout>
  );
};
