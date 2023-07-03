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

  console.log(data);

  return (
    <CardListStyle>
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
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  @media ${(props) => props.theme.desktop} {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }
  @media ${(props) => props.theme.laptop} {
    gap: 30px;
    grid-template-columns: repeat(2, minmax(50%, 1fr));
  }
  @media ${(props) => props.theme.tablets} {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
`;

export default Projects;
