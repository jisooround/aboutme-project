import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return <FooterContainer>Footer</FooterContainer>;
};

const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--color-black90);
`;

export default Footer;
