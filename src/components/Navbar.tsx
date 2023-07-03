import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const menuList = [
    {
      label: "About me👋",
      href: "/aboutme",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <ContainerStyle>
      <Link to="/">
        <img src="/logo.png" alt="logo image" />
      </Link>
      <MenuListStyle>
        {menuList.map((item) => (
          <Link to={`${item.href}`} key={item.label}>
            <li>{item.label}</li>
          </Link>
        ))}
      </MenuListStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: var(--padding-default);
  padding-top: 0;
  img {
    padding: 0 5rem 0 0;
    width: 13rem;
    cursor: pointer;
  }
`;

const MenuListStyle = styled.ul`
  display: flex;
  font-size: 1.375rem;
  li {
    width: 8.125rem;
    padding: 0 0.625rem;
    text-align: center;
  }
  :hover {
    color: var(--color-pink);
  }
`;

export default Navbar;
