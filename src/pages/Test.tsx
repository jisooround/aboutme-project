import Intro from "@/components/VideoBG";
import LoadingUi from "@/components/ui/LoadingUi";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

type Props = {};

const Test = (props: Props) => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      setData(projectList);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <HomeContainer layout>
      <Intro />
      <ProjectWrap>
        <ProjectTitleWrap>
          <h2>Projects</h2>
        </ProjectTitleWrap>
        <ProjectListWrap>
          {loading ? (
            <LoadingUi />
          ) : (
            <CardListStyle>
              {data.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </CardListStyle>
          )}
        </ProjectListWrap>
      </ProjectWrap>
    </HomeContainer>
  );
};

const HomeContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const ProjectWrap = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100vh;
  padding-top: 100px;
  background-color: var(--color-black10);
  z-index: 1000;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const ProjectTitleWrap = styled.div`
  width: 100%;
  position: relative; /* 변경된 부분 */
  h2 {
    color: black;
    position: relative;
    margin-left: 20px;
    font-size: 100px;
    font-weight: 100;
    animation: fadein 1s;
  }
`;

const ProjectListWrap = styled.div`
  width: 100%;
`;

const CardListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 87px auto 0;
  width: 100%;
  padding-bottom: 100px;
  justify-items: center;
  position: relative;
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
export default Test;
