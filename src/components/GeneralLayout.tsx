import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ContactPopup from "./ContactPopup";
import { RxEyeNone } from "react-icons/rx";

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
    </GeneralLayoutStyle>
  );
};

const GeneralLayoutStyle = styled.div`
  width: 100%;
`;

const GeneralBodyStyle = styled.div<Props>`
  padding-top: 87px;
`;
export default GeneralLayout;
