import React from "react";
import useLogin from "./hooks/useLogin";

const LoginComponent = () => {
  const { idRef, pwRef, loginRequest } = useLogin();

  return (
    <form onSubmit={loginRequest}>
      <div>
        <label htmlFor="">아이디</label>
        <input type="text" ref={idRef} />
      </div>
      <div>
        <label htmlFor="">비밀번호</label>
        <input type="password" ref={pwRef} />
      </div>
      <button>로그인</button>
    </form>
  );
};

export default LoginComponent;
