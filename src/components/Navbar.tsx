import { clipboard } from "@/utills/clipboard";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
interface Props {
  setContactFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setContactFlag }: Props) => {
  const location = useLocation();
  const [moMenuIsShow, setMoMenuIsShow] = useState<boolean>(false);
  const menuList = [
    {
      label: "About me",
      href: "/aboutme",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "",
    },
  ];
  return (
    <ContainerStyle>
      <ToastContainer
        autoClose={1000}
        position="bottom-right"
        hideProgressBar={false}
      />
      {/* === PC version === */}
      <PCversionStyle>
        <LogoStyle to="/">
          <img src="/logo_new.svg" alt="logo image" />
          <p>mudi's page.</p>
        </LogoStyle>
        <MenuListStyle>
          {menuList.map((item) => (
            <Link
              to={`${item.href}`}
              key={item.label}
              onClick={() => {
                item.label === "Contact" ? setContactFlag(true) : "";
              }}
            >
              <li className={item.href === location.pathname ? "bold" : ""}>
                {item.label}
              </li>
            </Link>
          ))}
        </MenuListStyle>
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
      {/* === MO version === */}
      <MOversionStyle>
        <LogoStyle to="/">
          <img src="/logo_new.svg" alt="logo image" />
          <p>mudi's page.</p>
        </LogoStyle>
        <div>
          <IoMenu
            onClick={() => {
              setMoMenuIsShow((state) => !state);
            }}
          />
          <MoMenuListStyle className={moMenuIsShow ? "show" : ""}>
            <div>
              <p>
                <Link
                  // className={href === "/" ? "bold" : ""}
                  to={"/"}
                  onClick={() => {
                    setMoMenuIsShow(false);
                  }}
                >
                  Home
                </Link>
              </p>
              {menuList.map((item) => (
                <p>
                  <Link
                    className={item.href === location.pathname ? "bold" : ""}
                    to={`${item.href}`}
                    key={item.label}
                    onClick={() => {
                      item.label === "Contact"
                        ? setContactFlag(true)
                        : setMoMenuIsShow(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </p>
              ))}
            </div>
            <IoCloseOutline
              onClick={() => {
                setMoMenuIsShow(false);
              }}
            />
          </MoMenuListStyle>
        </div>
      </MOversionStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  /* backdrop-filter: blur(10px); */
`;

const PCversionStyle = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: rgba(242, 242, 242, 0.1);
  backdrop-filter: blur(10px);
  grid-template-columns: 1fr 3fr 1fr;
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
    display: none;
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

const MenuListStyle = styled.ul`
  display: flex;
  font-size: 1.2rem;
  margin: 0 auto;
  box-sizing: border-box;
  .bold {
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: -7px;
    border-bottom: 1px solid var(--color-black90);
  }
  li {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: -6px;
    padding-bottom: 6px;
    text-align: center;
    mix-blend-mode: difference;
  }
  li:hover {
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: -7px;
    border-bottom: 1px solid var(--color-black90);
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
`;

const MOversionStyle = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
    width: 100%;
    height: 87px;
    padding: var(--padding-default);
    position: fixed;
    top: 0;
    z-index: 99999;
    flex-wrap: nowrap;
    /* background-color: var(--color-white); */
    background-color: rgba(242, 242, 242, 0.1);
    backdrop-filter: blur(10px);
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    img {
      width: 2.4rem;
      height: auto;
      cursor: pointer;
    }
    svg {
      font-size: 24px;
      cursor: pointer;
      color: var(--color-black);
    }
  }
  @media screen and (max-width: 620px) {
    padding: 1.5rem;
  }
`;

const MoMenuListStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding: var(--padding-default);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
  background-color: var(--color-skyblue);
  transform: translateX(-150vw);
  transition: all 0.5s ease-in-out;
  &.show {
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
  div {
    width: 100%;
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    p {
      width: 100%;
    }
    a {
      color: var(--color-white);
      font-size: 36px;
      transition: all.2s;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid var(--color-white);
        transition: none;
      }
      &.bold {
        font-weight: 600;
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
  svg {
    font-size: 4.375rem;
    color: var(--color-white);
  }
  @media screen and (min-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 670px) {
    div {
      a,
      p {
        font-size: 28px;
        transition: all.3s;
      }
    }
  }
`;

export default Navbar;
