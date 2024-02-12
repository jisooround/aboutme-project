import ProjectCard from "@/components/ProjectCard";
import GoSvgUi from "@/components/ui/GoSvgUi";
import { ProjectsListItemType } from "@/model/project";
import { getProjectList } from "@/service/projects";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Menu {
  name: string;
}

interface StyledComponentProps {
  isHover?: boolean;
}

const Projects = () => {
  const [data, setData] = useState<ProjectsListItemType[]>([]);
  const [menuState, setMenuState] = useState<number>(0);
  const [isItemHover, setIsItemHover] = useState<number>(999);

  const menu: Menu[] = [
    { name: "All" },
    { name: "Development" },
    { name: "Design" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      setData(projectList);
      console.log(projectList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data[isItemHover]);
  }, [isItemHover]);

  const onClickMenu = (idx: number) => {
    setMenuState(idx);
  };

  return (
    <ProjectContainer>
      {/* 왼쪽 영역 */}
      <ListWrap>
        {/* 고정 메뉴바 */}
        <div className="menu">
          <ul>
            {menu.map((menuItem, idx) => (
              <li
                key={idx}
                className={menuState === idx ? "active" : ""}
                onClick={() => onClickMenu(idx)}
              >
                {menuItem.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <div>
            {data.map((item, idx) => {
              return (
                <ProjectItem
                  key={item.id}
                  onMouseOver={(e) => {
                    setIsItemHover(idx);
                  }}
                  onMouseOut={(e) => {
                    setIsItemHover(999);
                  }}
                  isHover={isItemHover === idx}
                >
                  <button>
                    <GoSvgUi
                      color={
                        isItemHover === idx
                          ? "var(--color-black90)"
                          : "var(--color-black30)"
                      }
                    />
                  </button>
                  <p>{item.title}</p>
                  <span>{item.subTitle}</span>
                </ProjectItem>
              );
            })}
          </div>
        </div>
      </ListWrap>
      {/* 오른쪽 영역 */}
      <PriviewWrap>
        <div>
          <img
            src={isItemHover === 999 ? "null" : data[isItemHover].imageUrl}
            alt=""
          />
        </div>
      </PriviewWrap>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  height: calc(100vh - 89px);
  div {
    height: 100%;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  padding: 0 5rem;
  box-sizing: border-box;
  .menu {
    height: 50px;
    position: sticky;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-black90);
    ul {
      display: flex;
      gap: 20px;
      padding: 1rem 0;
      box-sizing: border-box;
      li {
        font-size: 20px;
        cursor: pointer;
        font-weight: 600;
        color: var(--color-black20);
      }
      li.active {
        color: var(--color-point);
      }
    }
  }
  .list {
    height: auto;
    padding-top: 1rem;
  }
`;

const ProjectItem = styled.div<StyledComponentProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 20px;
  padding: 1rem 0;
  cursor: pointer;
  button {
    width: 1.25rem;
    height: 1.25rem;
  }
  p {
    padding: 0 0.5rem 0 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) =>
      props.isHover ? "var(--color-black90)" : "var(--color-black30)"};
  }
  span {
    font-size: 1.25rem;
    color: ${(props) =>
      props.isHover ? "var(--color-black90)" : "var(--color-black30)"};
  }
`;

const PriviewWrap = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: pink; */
  padding: 4rem 2rem;
  box-sizing: border-box;
  div {
    width: 400px;
    margin: auto;
    overflow: hidden;
    object-fit: contain;
    img {
      width: 400px;
    }
  }
`;

const CardListStyle = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
`;

export default Projects;
