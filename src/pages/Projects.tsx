import ProjectCard from "@/components/ProjectCard";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
  padding: 6.25rem 0;
  gap: 4.375rem;
  width: 85%;
  height: 100%;
  margin: 0 auto;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  position: relative;
  @media ${(props) => props.theme.laptop} {
    gap: 30px;
    grid-template-columns: repeat(2, minmax(50%, 1fr));
  }
  @media ${(props) => props.theme.tablets} {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
  a {
    font-weight: 500;
    padding: 10px 0;
    border-bottom: 1px solid var(--color-white);
    position: absolute;
    &:hover {
      transition: all 0.2s;
      color: var(--color-pink);
      border-bottom: 1px solid var(--color-pink);
    }
  }
`;

export default Projects;
