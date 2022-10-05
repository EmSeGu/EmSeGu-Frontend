import React from "react";
import useLogin from "./hooks/useLogin";
import * as Login from "./login.style";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const { idRef, pwRef, loginRequest } = useLogin();

  return (
    <Login.Container>
      <Login.Title>LOGIN</Login.Title>
      <Login.Line></Login.Line>
      <form onSubmit={loginRequest}>
        <Login.InputContainer>
          <Login.Label htmlFor="">아이디</Login.Label>
          <Login.Input
            type="text"
            ref={idRef}
            placeholder="이메일을 입력하세요."
          />
        </Login.InputContainer>
        <Login.InputContainer>
          <Login.Label htmlFor="">비밀번호</Login.Label>
          <Login.Input
            type="password"
            ref={pwRef}
            placeholder="비밀번호를 입력하세요."
          />
        </Login.InputContainer>
        <Login.RequestButton>로그인</Login.RequestButton>
      </form>
      <Login.Move>
        <p>비밀번호를 잊어버리셨나요?</p> <Link to="/register">회원가입</Link>
      </Login.Move>
    </Login.Container>
  );
};

export default LoginComponent;
