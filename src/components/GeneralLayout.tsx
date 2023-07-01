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
  height: auto;
  padding-bottom: 9.375rem;
`;

const GeneralBodyStyle = styled.div``;
export default GeneralLayout;
