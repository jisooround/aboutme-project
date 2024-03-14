import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
interface Props {
  setContactFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setContactFlag }: Props) => {
  const location = useLocation();
  const menuList = [
    {
      label: "About me",
      href: "/aboutme",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    // {
    //   label: `GitHub`,
    //   href: "https://github.com/jisooround",
    // },
    {
      label: "Contact",
      href: "",
    },
  ];
  return (
    <ContainerStyle>
      <LogoStyle to="/">
        <img src="/logo_new.svg" alt="logo image" />
        <p>mudi's page.</p>
      </LogoStyle>
      <MenuListStyle>
        {menuList.map((item) => (
          <Link
            to={`${item.href}`}
            target={item.label === "GitHub" ? "_blank" : "_self"}
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
        <p>
          <a href="mailto:9utesleben@gmail.com">9utesleben@gmail.com</a>
        </p>
      </RightStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: var(--padding-default);
  height: 87px;
  /* background-color: yellow; */
  img {
    /* background-color: pink; */
    width: 2.4rem;
    height: auto;
    cursor: pointer;
  }
`;

const LogoStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2rem;
  p {
    font-size: 1.2rem;
    color: var(--color-black90);
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
  }
`;

export default Navbar;
