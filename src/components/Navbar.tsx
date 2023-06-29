import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const menuList = [
    {
      label: "About me 👋",
      href: "/aboutme",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
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
          <Link to={`${item.href}`}>
            <li key={item.label}>{item.label}</li>
          </Link>
        ))}
      </MenuListStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -1.875rem 0 0 0;
  padding: var(--padding-default);
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
