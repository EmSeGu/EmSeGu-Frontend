import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  margin-top: 83px;
  height: 100%;

  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
