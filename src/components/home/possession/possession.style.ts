import styled from "styled-components";

export const Container = styled.div`
  width: 904px;

  margin-bottom: 24px;
`;

export const PossesionContainer = styled.div`
  width: 459px;
  height: 98px;

  margin-top: 31px;

  & + & {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  color: #000000;
`;

export const Money = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: #000000;

  font-family: "Noto Sans KR";
  display: flex;
`;

export const Target = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: #8220ff;

  font-family: "Noto Sans KR";
`;

export const Flex = styled.div`
  height: 70px;

  display: flex;
  align-items: flex-end;

  gap: 13px;
`;

export const Change = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 30px;

  color: #0019ff;
`;
