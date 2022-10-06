import styled from "styled-components";

export const StockLayout = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 6px;
  width: 100%;
`;

export const NavItem = styled.button<{ clicked: boolean }>`
  background-color: white;
  border: none;
  font-weight: ${(props) => props.clicked && "bold"};
  font-size: 16px;
  color: ${(props) => (props.clicked ? "black" : "#808080")};
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
`;

export const TableFrame = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  align-items: center;
  height: 50px;
`;

export const TableHead = styled.thead`
  background-color: #fbfbfb;
  color: #969696;
`;

export const TableHeadName = styled.td`
  width: 40%;
  text-align: left;
`;

export const TableHeadItem = styled.td`
  width: 12%;
`;

export const TableName = styled.td`
  text-align: left;
  font-weight: bolder;
  width: 40%;
`;

export const TableItem = styled.td`
  width: 12%;
`;

export const Graph = styled.div`
  width: 100%;
  height: 50px;

  polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    z-index: 2;

    stroke: #fa7373;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const TableYield = styled.td<{ state: string }>`
  color: ${(props) => (props.state === "positive" ? "#FF0000" : "#001AFF")};
  width: 12%;
`;
