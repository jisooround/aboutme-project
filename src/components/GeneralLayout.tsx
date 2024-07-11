import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ContactPopup from "./ContactPopup";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  const [contactFlag, setContactFlag] = useState<boolean>(false);

  return (
    <GeneralLayoutStyle>
      {contactFlag && <ContactPopup setContactFlag={setContactFlag} />}
      <Navbar setContactFlag={setContactFlag} />
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
`;
export default GeneralLayout;
