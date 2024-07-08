import Intro from "@/components/VideoBG";
import LoadingUi from "@/components/ui/LoadingUi";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const Test = (props: Props) => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const projectOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const introOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      <motion.div style={{ opacity: introOpacity }}>
        <Intro />
      </motion.div>
      <ProjectWrap ref={ref} style={{ opacity: projectOpacity }}>
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
  background-color: var(--color-black10);
`;

const ProjectWrap = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  margin-top: 120vh;
  padding-top: 100px;
  box-sizing: border-box;
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
    margin-top: 87px;
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
