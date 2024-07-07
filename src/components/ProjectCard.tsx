import { ProjectsListItemType } from "@/model/project";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlinePlus } from "react-icons/hi2";

type Props = {
  item: ProjectsListItemType;
};

const ProjectCard = ({ item }: Props) => {
  const { title, dateEnd, dateStart, icon, imageUrl, team, tool, id } = item;
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);

  return (
    <>
      <CardStyle $isOpen={isOpenInfo}>
        <TitleWrap>{title}</TitleWrap>
        <IconWrap
          $isOpen={isOpenInfo}
          onClick={() => {
            setIsOpenInfo((prev) => !prev);
          }}
        >
          <HiOutlinePlus className="icon" />
        </IconWrap>
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isOpen ? "300px" : "auto")};
  transition: height 0.3s ease;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-black30);
  padding: 20px 1.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: transform 0.3s ease;
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
export default ProjectCard;
