import VideoBG from "@/components/VideoBG";
import LoadingUi from "@/components/ui/LoadingUi";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import { useScroll } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Test = (props: Props) => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   console.log(scrollY);
  // }, [scrollY]);

  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      setData(projectList);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <HomeContainer>
      <IntroWrap>
        <div>Front-end Developer</div>
        <div>for User Experience</div>
      </IntroWrap>
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
      <VideoBG />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IntroWrap = styled.div`
  width: 100%;
  height: calc(100vh - 87px);
  mix-blend-mode: difference;
  box-sizing: border-box;
  position: relative;
  position: sticky;
  top: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
    bottom: 0;
    font-size: 100px;
    font-weight: 700;
    color: var(--color-white);
    animation: fadein 1s;
    &:nth-child(2) {
      text-align: right;
    }
  }
`;

const ProjectWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80vh;
  padding-top: 100px;
  background-color: var(--color-black10);
  z-index: 1000;
  display: flex;
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
  /* padding: 4.25rem 0; */
  margin: 87px auto 0;
  width: 100%;
  padding-bottom: 100px;
  justify-items: center;
  /* grid-template-columns: repeat(3, minmax(30%, 1fr)); */
  position: relative;
  @media ${(props) => props.theme.laptop} {
    /* gap: 30px; */
    /* grid-template-columns: repeat(2, minmax(40%, 1fr)); */
  }
  @media ${(props) => props.theme.tablets} {
    /* grid-template-columns: repeat(1, minmax(100%, 1fr)); */
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
export default Test;
