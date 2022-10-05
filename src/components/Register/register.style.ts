import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;

  width: 460px;
  height: 50px;
  left: 526px;
  top: 313px;

  background: #ffffff;
  border: 2px solid #cecece;
  border-radius: 5px;
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Form = styled.form`
  width: 460px;
  height: 648px;

  display: flex;
  flex-direction: column;

  width: 450px;
  height: 648px;

  div {
    margin-bottom: 30px;
  }
`;

export const Label = styled.label`
  width: 200px;
  height: 30px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #7b5eb4;
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 450px;
  height: 60px;
  background: #7b5eb4;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-family: "Pretendard";
`;

export const SignUp = styled.div`
  width: 158px;
  height: 48px;

  margin-bottom: 30px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #7b5eb4;
`;
