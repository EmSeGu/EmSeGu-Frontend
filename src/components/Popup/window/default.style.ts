import styled from "styled-components";

export const DefaultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 10px;
`;

export const SubTitle = styled.span`
  color: #8d8d8d;
  font-weight: bold;
  font-size: smaller;
`;

export const Company = styled.span`
  font-weight: bold;
  font-size: larger;
`;

export const Select = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const AveragePrice = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ededed;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border-radius: 9px;
  padding: 15px;
`;

export const Quantity = styled.div`
  border-radius: 9px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ededed;
  width: 35%;
  padding: 15px;
`;

export const Text = styled.span`
  color: #575757;
  font-size: 14px;
`;

export const Price = styled.span`
  font-size: 20px;
`;

export const AmountSelect = styled.input`
  width: 100%;
  background-color: #ededed;
  border: none;
  font-size: 20px;
  text-align: right;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 49%;
  height: 45px;
  border-radius: 10px;
  border: none;
  color: white;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 45px;
  background: linear-gradient(90deg, #9d51ff 0%, #d2afff 100%);
  border-radius: 10px;
  border: none;
  color: white;
`;
