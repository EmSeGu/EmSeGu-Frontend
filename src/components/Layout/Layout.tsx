import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  margin-top: 83px;
`;

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
