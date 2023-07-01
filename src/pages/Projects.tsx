import ProjectCard from "@/components/ProjectCard";
import { ProjectsListItem } from "@/model/project";
import { getProjectList } from "@/service/projects";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Projects = () => {
  const [data, setData] = useState<ProjectsListItem[]>([]);
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
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 4.375rem;
  width: 85%;
  height: 100%;
  margin: 0 auto;
  justify-items: center;
`;

export default Projects;
