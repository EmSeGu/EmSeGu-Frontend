import styled from "styled-components";

export const CardContainer = styled.div`
  width: 288px;
  height: 126px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 14px;
`;

export const Graph = styled.div`
  width: 50px;
  height: 100%;
  position: relative;

  polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    z-index: 2;

    stroke: #fa7373;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .circle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fa7373;

    top: calc(0.9px * 50 + 1px);
    left: calc(0.9px * 0 - 2.5px);
  }

  .circle:nth-child(2) {
    top: calc(0.9px * 50 + 1px);
    left: calc(0.9px * 20 - 2.5px);
  }

  .circle:nth-child(3) {
    top: calc(0.9px * 35 + 1px);
    left: calc(0.9px * 40 - 2.5px);
  }
`;

export const Des = styled.div`
  width: 187px;
  height: 85px;
`;

export const DesTitle = styled.h3`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  color: #000000;
`;

export const DesColumn = styled.div`
  display: flex;
  margin-top: 5px;
  .p1 {
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;

    color: #848484;

    margin-right: 7px;
  }

  .p2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #282828;
  }

  .p2 + .p1 {
    margin-left: 9px;
  }
`;
