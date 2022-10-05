import React from "react";
import * as Head from "./header.style";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <Head.Container>
      <Head.Image src={logo} />
    </Head.Container>
  );
};

export default Header;
