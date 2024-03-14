import ProjectCard from "@/components/ProjectCard";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiNotionFill } from "react-icons/ri";

const Projects = () => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      setData(projectList);
    };

    fetchData();
  }, []);

  return (
    <CardListStyle>
      <a
        target="_blank"
        href="https://kaput-trick-978.notion.site/Portfolio-74a630603cb84dc1aff367ef755a5f83?pvs=4"
      >
        <RiNotionFill />
        노션으로 보기 👀
      </a>
      {data.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </CardListStyle>
  );
};

const CardListStyle = styled.div`
  display: grid;
  /* padding: 4.25rem 0; */
  margin: 87px auto 0;
  width: 85%;
  padding-bottom: 100px;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  position: relative;
  gap: 4.375rem;
  @media ${(props) => props.theme.laptop} {
    gap: 30px;
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }
  @media ${(props) => props.theme.tablets} {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
  a {
    background-color: var(--color-skyblue);
    padding: 10px 20px;
    color: var(--color-white);
    font-weight: 500;
    border-radius: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5em;
    top: -60px;
    right: 0;
  }
  a:hover {
    box-shadow: 3px 2px 8px var(--color-black30);
  }
`;

export default Projects;
