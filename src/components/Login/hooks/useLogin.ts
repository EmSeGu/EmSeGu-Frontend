import React, { useRef } from "react";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  const loginRequest = (e: any) => {
    e.preventDefualt();
    console.log(idRef.current.value, pwRef.current.value);
  };

  return { idRef, pwRef, loginRequest };
};

export default useLogin;
