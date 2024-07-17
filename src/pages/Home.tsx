import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ListTypeProjectCard from "@/components/ListTypeProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import GridTypeProjectCard from "@/components/GridTypeProjectCard";
import VideoBG from "@/components/VideoBG";

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const projectOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const introOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const preloadImages = (urls: string[]) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      const sortedData = projectList.sort((a: ProjectsListItemType, b: ProjectsListItemType) => a.order - b.order);
      setData(sortedData);
      setLoading(false);
      console.log(sortedData);
      // 그리드 뷰에서 사용할 이미지 URL 추출
      const imageUrls = projectList.map((project: ProjectsListItemType) => project.imageUrl);
      preloadImages(imageUrls);
    };

    fetchData();
  }, []);

  return (
    <HomeContainer>
      <IntroWrap style={{ opacity: introOpacity }}>
        <VideoBG />
      </IntroWrap>
      <ProjectWrap ref={ref} style={{ opacity: projectOpacity }}>
        <ProjectTitleWrap>
          <h2>Projects</h2>
        </ProjectTitleWrap>
        <TypeToggleWrap>
          <TypeButton
            $isGrid={!isGrid}
            onClick={() => {
              setIsGrid(false);
            }}
          >
            List
          </TypeButton>
          <TypeButton
            $isGrid={isGrid}
            onClick={() => {
              setIsGrid(true);
            }}
          >
            Grid
          </TypeButton>
        </TypeToggleWrap>
        <ProjectItemWrap>
          {isGrid ? (
            <CardGridStyle>
              {data.map((item) => (
                <GridTypeProjectCard key={item.id} item={item} />
              ))}
            </CardGridStyle>
          ) : (
            <CardListStyle>
              {data.map((item) => (
                <ListTypeProjectCard key={item.id} item={item} />
              ))}
            </CardListStyle>
          )}
        </ProjectItemWrap>
      </ProjectWrap>
    </HomeContainer>
  );
};
const HomeContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-black10);
`;

const IntroWrap = styled(motion.div)``;

const ProjectWrap = styled(motion.div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin-top: 100vh;
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
    @media screen and (max-width: 960px) {
      font-size: 50px;
    }
  }
`;

const TypeToggleWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  justify-content: flex-end;
`;

const TypeButton = styled.div<{ $isGrid: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  background-color: ${(props) => (props.$isGrid ? "var(--color-black90)" : "var(--color-white)")};
  color: ${(props) => (props.$isGrid ? "var(--color-white)" : "var(--color-black90)")};
  &:hover {
    background-color: ${(props) => (props.$isGrid ? "var(--color-white)" : "var(--color-black90)")};
    color: ${(props) => (props.$isGrid ? "var(--color-black90)" : "var(--color-white)")};
  }
`;

const ProjectItemWrap = styled.div`
  width: 100%;
`;

const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 3rem;
  }
`;

const CardListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
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

export default Home;
