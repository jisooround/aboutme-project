import { ProjectsListItemType } from "@/model/project";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectDetail from "./ProjectDetail";
import ProjectModal from "./ProjectModal";
import ModalPortal from "./ui/ModalPortal";
import { formatDate } from "@/utills/formatDate";

type Props = {
  item: ProjectsListItemType;
};

const ProjectCard = ({ item }: Props) => {
  const { title, dateEnd, dateStart, icon, imageUrl, team, tool, id } = item;
  const [openModal, setOpenModal] = useState(false);
  // 모달이 띄워져있을 때 배경 스크롤 막기
  useEffect(() => {
    if (openModal) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
     overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [openModal]);
  return (
    <CardStyle>
      <ImageStyle onClick={() => setOpenModal(true)}>
        <img src={imageUrl} />
      </ImageStyle>
      <h3>
        {icon} {title}
      </h3>
      <InfoStyle>
        <div>
          <p>
            {formatDate(dateStart)} - {formatDate(dateEnd)}
          </p>
          <span>{team}</span>
        </div>
        <ul>
          {tool.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </InfoStyle>
      {openModal && (
        <ModalPortal>
          <ProjectModal setOpenModal={setOpenModal}>
            <ProjectDetail id={id} />
          </ProjectModal>
        </ModalPortal>
      )}
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--color-white);
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 20px 1.25rem 1.875rem 1.25rem;
  cursor: pointer;
  box-shadow: 0.1875rem 0.1875rem 0.9375rem var(--color-black60);
  transition: transform 0.3s ease;
  &:hover {
    box-shadow: 0.1875rem 0.1875rem 0.9375rem var(--color-black60);
    transform: translateY(-5px);
  }
  h3 {
    display: flex;
    align-content: center;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-black80);
  }
`;

const ImageStyle = styled.div`
  width: 100%;
  height: 14.375rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoStyle = styled.div`
  width: 100%;
  border-top: 1px solid var(--color-black30);
  padding: 5px 10px 0 10px;
  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.625rem;
    p {
      color: var(--color-black70);
      font-weight: bold;
    }
    span {
      font-size: 0.875rem;
      color: var(--color-white);
      padding: 0.3125rem 0.625rem;
      border-radius: 0.3125rem;
      background-color: var(--color-pink);
    }
  }

  ul {
    padding-top: 18px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: var(--color-black80);
    gap: 0.5rem;
    li {
      font-weight: bold;
      color: var(--color-black50);
    }
  }
`;
export default ProjectCard;
