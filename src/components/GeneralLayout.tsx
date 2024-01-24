import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <GeneralLayoutStyle>
      <Navbar />
      <GeneralBodyStyle>{children}</GeneralBodyStyle>
    </GeneralLayoutStyle>
  );
};

const GeneralLayoutStyle = styled.div`
  width: 100%;
  /* padding-bottom: 9.375rem; */
`;

const GeneralBodyStyle = styled.div`
  height: calc(100vh - 87px);
`;
export default GeneralLayout;
