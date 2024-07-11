import { clipboard } from "@/utills/clipboard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  return (
    <ContainerStyle>
      <ToastContainer autoClose={1000} position="bottom-right" hideProgressBar={false} />
      {/* === PC version === */}
      <PCversionStyle>
        <LogoStyle to="/">
          <img src="/logo_new.svg" alt="logo image" />
        </LogoStyle>
        <RightStyle>
          <p
            onClick={() => {
              clipboard("9utesleben@gmail.com");
            }}
          >
            9utesleben@gmail.com
          </p>
        </RightStyle>
      </PCversionStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  /* backdrop-filter: blur(10px); */
`;

const PCversionStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: rgba(242, 242, 242, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: var(--padding-default);
  height: 87px;
  img {
    width: 2.4rem;
    height: auto;
    cursor: pointer;
  }
  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

const LogoStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2rem;
  p {
    font-size: 1.2rem;
    color: var(--color-black90);
    mix-blend-mode: difference;
  }
`;

const RightStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 1.2rem;
    display: inline-block;
    margin-bottom: -6px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--color-black90);
    text-align: right;
    cursor: pointer;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export default Navbar;
