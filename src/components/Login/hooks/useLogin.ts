import React, { useRef } from "react";
import AuthApi from "../../../api/Auth/Auth.api";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../reducer/user/UserReducers";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const loginRequest = async (e: any) => {
    e.preventDefault();
    const bool = await AuthApi.login(idRef.current.value, pwRef.current.value);
    if (bool) {
      dispatch({
        type: LOGIN,
      });
    }
  };

  return { idRef, pwRef, loginRequest };
};

export default useLogin;
