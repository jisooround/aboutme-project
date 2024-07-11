import { ProjectsListItemType } from "@/model/project";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { openLinkInNewTab } from "@/utills/openLinkInNewTap";

type Props = {
  item: ProjectsListItemType;
};

const ListTypeProjectCard = ({ item }: Props) => {
  const { title, dateEnd, dateStart, icon, imageUrl, team, tool, id, gitUrl, viewUrl } = item;
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);

  return (
    <>
      <CardStyle $isOpen={isOpenInfo}>
        <TitleArea>
          <TitleWrap>{title}</TitleWrap>
          <IconWrap
            $isOpen={isOpenInfo}
            onClick={() => {
              setIsOpenInfo((prev) => !prev);
            }}
          >
            <HiOutlinePlus className="icon" />
          </IconWrap>
        </TitleArea>
        {isOpenInfo && (
          <ContentArea>
            <Icon
              onClick={() => {
                openLinkInNewTab(gitUrl);
              }}
            >
              <p>CODE</p>
              <FaGithub />
            </Icon>
            <Icon
              onClick={() => {
                openLinkInNewTab(viewUrl);
              }}
            >
              <p>VIEW</p>
              <FaRegEye />
            </Icon>
          </ContentArea>
        )}
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  /* height: ${(props) => (props.$isOpen ? "300px" : "auto")}; */
  height: auto;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-black30);
  padding: 20px 1.25rem;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  align-content: center;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-black80);
`;

const IconWrap = styled.div<{ $isOpen: boolean }>`
  font-size: 3rem;
  display: flex;
  align-items: ${(props) => (props.$isOpen ? "flex-start" : "center")};
  .icon {
    transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0)")};
    transition: transform 0.2s ease;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  height: 30px;
  animation-name: animate-appear;
  animation-duration: 0.5s;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  @keyframes animate-appear {
    0% {
      opacity: 0;
      height: 0px;
    }
    100% {
      opacity: 1;
      height: 30px;
    }
  }
`;

const Icon = styled.div`
  width: 100px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-black90);
  border-radius: 0.375rem;
  padding: 0.625rem;
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-black90);
    transition: all 0.2s ease;
  }
`;
export default ListTypeProjectCard;
