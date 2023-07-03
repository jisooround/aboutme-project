import { ProjectDetailType } from "@/model/project";
import { getProjectDetail } from "@/service/projects";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { clickLink } from "./utills/clickLink";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { projectDesc } from "./data/projectDesc";
import { formatDate } from "./utills/formatDate";

type Props = {
  id: string;
};

const ProjectDetail = ({ id }: Props) => {
  const [data, setData] = useState<ProjectDetailType>();
  const [text, setText] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const projectDetail = await getProjectDetail(id);
      setData(projectDetail[0]);
      setText(projectDetail[0].content);
    };

    fetchData();
  }, []);

  const markdown = `${text}`;

  return (
    <ContentArea>
      <ImageAreaStyle>
        <img src={data?.imageUrl} />
      </ImageAreaStyle>
      <InfoAreaStyle>
        <h3>{data?.icon}</h3>
        <h2>{data?.title}</h2>
        <h4>{data?.description}</h4>
        <div>
          <p>작업 기간</p>
          <p>
            {formatDate(data?.dateStart)} - {formatDate(data?.dateEnd)}
          </p>
        </div>
        <div>
          <p>팀 구성</p>
          <p>{data?.team}</p>
        </div>
        <span>
          {data?.gitUrl && (
            <BsGithub
              className="pointer"
              onClick={() => clickLink(`${data?.gitUrl}`)}
            />
          )}
          {data?.blogUrl && (
            <SiVelog
              className="pointer"
              onClick={() => clickLink(`${data?.gitUrl}`)}
            />
          )}
        </span>
      </InfoAreaStyle>
      <hr />
      <MarkdownPreview source={markdown} />
    </ContentArea>
  );
};

const ContentArea = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1.25rem;
    padding-right: 0.625rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-black10);
    border-radius: 0.625rem;
    border: 5px solid var(--color-white);
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.625rem;
    padding-left: 2.5rem;
  }
  background-color: var(--color-white);
  padding: 3.125rem 3.75rem;
  margin: 100px auto;
  border-radius: 0.625rem;
  hr {
    margin: 2.5rem 0;
    height: 0.0625rem;
    background-color: var(--color-blue);
  }
`;

const ImageAreaStyle = styled.div`
  border-radius: 1.25rem;
  margin-bottom: 1.875rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoAreaStyle = styled.div`
  color: var(--color-black90);
  h3 {
    font-size: 3.75rem;
    padding-bottom: 1.25rem;
  }
  h2 {
    font-size: 2.375rem;
    font-weight: 600;
    padding-bottom: 1.25rem;
  }
  h4 {
    padding-bottom: 1.25rem;
    line-height: 1.3em;
    font-size: 1.1rem;
    letter-spacing: -0.2px;
  }
  span {
    color: var(--color-black30);
    padding-top: 1.875rem;
    width: 30%;
    display: flex;
    gap: 0.625rem;
    font-size: 1.75rem;
  }
  div {
    display: grid;
    grid-template-columns: 20% 80%;
    font-weight: 700;
    color: var(--color-black80);
    padding-bottom: 0.625rem;
    p:nth-child(2n) {
      font-weight: 400;
    }
  }
`;

export default ProjectDetail;
