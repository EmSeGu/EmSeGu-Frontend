import React, { useRef } from "react";
import AuthApi from "../../../api/Auth/Auth.api";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  const loginRequest = (e: any) => {
    e.preventDefualt();
    AuthApi.login(idRef.current.value, pwRef.current.value);
  };

  return { idRef, pwRef, loginRequest };
};

export default useLogin;
