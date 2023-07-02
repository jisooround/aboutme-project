import React from "react";
import styled from "styled-components";
import { LuExternalLink } from "react-icons/lu";
import ContactCard from "@/components/ContactCard";
import ContactSwiper from "@/components/ContactSwiper";

const Contact = () => {
  return (
    <ContactStyle>
      <ContactCard />
      <h1>Here is some information about me.</h1>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  h1 {
    font-style: italic;
    position: absolute;
    bottom: 1.875rem;
    font-size: 3rem;
  }
`;

export default Contact;
