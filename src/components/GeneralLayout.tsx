import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ContactPopup from "./ContactPopup";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <GeneralLayoutStyle>
      <Navbar />
      <GeneralBodyStyle>{children}</GeneralBodyStyle>
      <Footer />
    </GeneralLayoutStyle>
  );
};

const GeneralLayoutStyle = styled.div`
  width: 100%;
`;

const GeneralBodyStyle = styled.div`
  padding-top: 87px;
  box-sizing: border-box;
`;
export default GeneralLayout;
