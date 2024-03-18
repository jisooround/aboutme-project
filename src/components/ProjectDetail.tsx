import { ProjectDetailType } from "@/model/project";
import { getProjectDetail } from "@/service/projects";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { clickLink } from "@/utills/clickLink";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { formatDate } from "@/utills/formatDate";
import LoadingUi from "./ui/LoadingUi";

type Props = {
  id: string;
};

const ProjectDetail = ({ id }: Props) => {
  const [data, setData] = useState<ProjectDetailType>();
  const [text, setText] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectDetail = await getProjectDetail(id);
      setData(projectDetail[0]);
      setText(projectDetail[0].content);
      setLoading(false);
    };

    fetchData();
  }, []);

  const markdown = `${text}`;

  return (
    <ContentArea>
      {loading ? (
        <LoadingUi />
      ) : (
        <>
          <ImageAreaStyle>
            <img src={data?.imageUrl} />
          </ImageAreaStyle>
          <InfoAreaStyle>
            <h3>{data?.icon}</h3>
            <h2>{data?.title}</h2>
            <h4>{data?.description}</h4>
            <div>
              <p className="title">작업 기간</p>
              <p>
                {formatDate(data?.dateStart)} - {formatDate(data?.dateEnd)}
              </p>
            </div>
            <div>
              <p className="title">팀 구성</p>
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
        </>
      )}
    </ContentArea>
  );
};

const ContentArea = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  animation-name: animate-appear;
  animation-duration: 0.8s;
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
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
  @keyframes animate-appear {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 580px) {
    width: 80%;
    padding: 2.125rem 1.25rem;
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
  @media screen and (max-width: 580px) {
    div {
      display: flex;
      flex-wrap: wrap;
      .title {
        padding: 5px 0;
        width: 100%;
      }
    }
  }
`;

export default ProjectDetail;
