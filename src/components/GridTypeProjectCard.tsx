import { ProjectsListItemType } from "@/model/project";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Gradient from "./ui/Gradient";

type Props = {
  item: ProjectsListItemType;
};

const GridTypeProjectCard = ({ item }: Props) => {
  const { title, dateEnd, dateStart, icon, imageUrl, team, tool, id } = item;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <>
      <CardStyle onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave}>
        <ImageWrap $isHovered={hoveredId === id}>
          {hoveredId === id && <Gradient transition={true} />}
          <img src={imageUrl} alt="project-image" />
        </ImageWrap>
        {hoveredId === id && (
          <ContentArea>
            <TitleWrap>{title}</TitleWrap>
            <IconWrap>
              <Icon>
                <FaGithub />
              </Icon>
              <Icon>
                <FaRegEye />
              </Icon>
            </IconWrap>
          </ContentArea>
        )}
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const ImageWrap = styled.div<{ $isHovered: boolean }>`
  width: 100%;
  aspect-ratio: 4 / 2.5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  overflow: hidden;
  border: 1px dashed var(--color-black90);
  &:hover {
    border: 1px solid var(--color-black90);
  }
  img {
    filter: ${(props) => (props.$isHovered ? "none" : "grayscale(100%)")};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  height: 30px;
  bottom: 10px;
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-white);
`;

const IconWrap = styled.div`
  font-size: 3rem;
  display: flex;
  gap: 0.5rem;
`;

const Icon = styled.div`
  width: 40px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black90);
  color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 0.375rem;
  padding: 0.3rem;
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-black90);
    transition: all 0.2s ease;
  }
`;
export default GridTypeProjectCard;
