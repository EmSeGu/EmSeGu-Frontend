import styled from "styled-components";

export const GoalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 7px;
`;

export const Title = styled.span`
  font-size: 18px;
`;

export const Date = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: #696969;
`;
export const YieldGoalBox = styled.div`
  margin: 15px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  column-gap: 7px;
`;

export const YieldGoal = styled.input`
  width: 30%;
  background-color: #efefef;
  border: none;
  font-size: 20px;
  text-align: right;
  padding: 7px;
  :focus {
    outline: none;
  }
`;

export const Text = styled.span`
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  height: 55px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background: #b880ff;
  border-radius: 5px;
`;
