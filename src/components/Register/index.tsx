import React, { useState, useRef } from "react";
import AuthApi from "../../api/Auth/Auth.api";
import {
  Input,
  Input2,
  Container,
  Form,
  Label,
  Button,
  SignUp,
} from "./register.style";

const RegisterForm = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [pw2, setPw2] = useState<string>();

  const citationRef = useRef<HTMLInputElement>();

  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const requestRegisterf = (e) => {
    e.preventDefault();
    console.log("register");
    const value = CheckPw();
    if (!value) {
      return;
    }

    AuthApi.register(id, pw);
  };

  const checkPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw2(e.target.value);
  };

  const CheckPw = () => {
    if (pw == pw2) {
      return true;
    } else return false;
  };

  return (
    <Container>
      <SignUp>SIGN UP</SignUp>
      <Form onSubmit={requestRegisterf}>
        <div>
          <Label htmlFor="">이메일</Label>
          <div className="flex">
            <Input type="text" onChange={changeId} />
            <p onClick={() => AuthApi.requestEmail(id)}>인증</p>
          </div>
        </div>
        <div>
          <Label htmlFor="">인증코드</Label>
          <div className="flex">
            <Input2 type="text" ref={citationRef} />
            <p
              onClick={() =>
                AuthApi.citationEmail(citationRef.current.value, id)
              }
            >
              인증
            </p>
          </div>
        </div>
        <div>
          <Label htmlFor="">비밀번호</Label>
          <Input type="password" onChange={changePw} />
        </div>
        <div>
          <Label htmlFor="">비밀번호 확인</Label>
          <Input type="password" onChange={checkPw} />
        </div>
        <Button>회원가입</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
