import React, { useState } from "react";
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
  const [name, setName] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [pw2, setPw2] = useState<string>();

  const changeId = (e: any) => {
    setId(e.target.value);
  };

  const changeName = (e: any) => {
    setName(e.target.value);
  };

  const changePw = (e: any) => {
    setPw(e.target.value);
  };

  const requestRegisterf = () => {
    console.log("register");
  };

  const checkPw = (e: any) => {
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
            <p>인증</p>
          </div>
        </div>
        <div>
          <Label htmlFor="">인증코드</Label>
          <Input2 type="text" onChange={changeId} />
        </div>
        <div>
          <Label htmlFor="">비밀번호</Label>
          <Input type="password" onChange={changePw} />
        </div>
        <div>
          <Label htmlFor="">비밀번호 확인</Label>
          <Input type="password" onChange={checkPw} />
        </div>
        <div>
          <Label htmlFor="">닉네임</Label>
          <Input type="password" onChange={changeName} />
        </div>
        <Button>회원가입</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
