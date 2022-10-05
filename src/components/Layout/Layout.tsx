import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  margin-top: 83px;
  height: 100%;
`;

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
