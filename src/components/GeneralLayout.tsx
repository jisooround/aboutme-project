import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ContactPopup from "./ContactPopup";
import { RxEyeNone } from "react-icons/rx";

type Props = {
  children: React.ReactNode;
  contactFlag: boolean;
};

const GeneralLayout = ({ children }: Props) => {
  const [contactFlag, setContactFlag] = useState<boolean>(false);

  return (
    <GeneralLayoutStyle contactFlag={contactFlag}>
      {contactFlag && <ContactPopup setContactFlag={setContactFlag} />}
      <Navbar setContactFlag={setContactFlag} />
      <GeneralBodyStyle>{children}</GeneralBodyStyle>
    </GeneralLayoutStyle>
  );
};

const GeneralLayoutStyle = styled.div<Props>`
  width: 100%;
  overflow: ${(props) => (props.contactFlag ? "auto" : "")};
`;

const GeneralBodyStyle = styled.div`
  height: calc(100vh - 87px);
`;
export default GeneralLayout;
