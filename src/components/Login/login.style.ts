import styled from "styled-components";

export const Title = styled.h1`
  width: 149px;
  margin-bottom: 35px;

  color: #7b5eb4;

  font-weight: 700;
  font-size: 50px;
`;

export const Line = styled.div`
  width: 52px;
  height: 4px;

  background: #7b5eb4;
  border-radius: 100px;

  margin-bottom: 35px;
`;

export const Container = styled.div`
  font-family: "Pretendard";
  font-style: normal;

  height: 100%;
  line-height: 60px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 460px;
  height: 68px;

  border: 2px solid #cecece;
  border-radius: 5px;

  display: flex;
  align-items: center;

  margin-bottom: 25px;
`;

export const Label = styled.label`
  width: 74px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #cecece;
`;

export const Input = styled.input`
  margin-left: 20px;

  border: none;
  outline: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #cecece;
`;

export const RequestButton = styled.button`
  width: 468px;
  height: 70px;

  background: #7b5eb4;
  border-radius: 5px;

  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;

  border: none;
`;

export const Move = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */
  display: flex;
  color: #1e5bd0;
  margin-top: 24px;

  p {
    margin-right: 20px;
  }
`;
