import { ProjectDetailType } from "@/model/project";
import { getProjectDetail } from "@/service/projects";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MarkdownPreview from "@uiw/react-markdown-preview";

type Props = {};

const ProjectDetail = () => {
  const [data, setData] = useState<ProjectDetailType>();
  const [text, setText] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const projectDetail = await getProjectDetail(
        "e87e1c6d-f2c4-4ed1-ae50-86a4cdbaea30",
      );
      setData(projectDetail[0]);
      setText(projectDetail[0].content);
    };

    fetchData();
  }, []);

  const source = text;
  const markdown = `### 🛠 사용 스택
  #### JavaScript
  자바스크립트 내장 메서드를 학습하며 앱의 기본 동작을 구현하였습니다.
  #### Vite
  간단한 설치와 빌드 시간이 빠른 Vite를 사용하였습니다.
  #### SASS
  중첩 CSS 기능을 사용하기 위하여 스타일 전처리 도구로 SASS를 사용하였습니다.
  
  ---
  
  ### 🚩 구현 내용
  
  #### ☑️ 달력
  날짜를 클릭하면 해당 날짜가 왼쪽에 뜨게 됩니다. 그날 일정이 하나라도 있다면 별 표시가 되고, 없다면 할 일 리스트가 비워진 채로 띄워집니다.
  #### ☑️ To Do 기능
  할 일을 입력하고 추가하면 날짜가 함께 저장됩니다. 원래는 날짜가 아닌 다른 데이터를 넣도록 만들어진 key인데(원래는 우선순위 number를 입력하는 항목입니다.) 달력 기능을 사용하기 위해 이 항목을 활용하였습니다.`;
  // console.log(data);
  return (
    <ContentArea>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> */}
      <MarkdownPreview source={markdown} />
    </ContentArea>
  );
};

const ContentArea = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: var(--color-white); */
  color: var(--color-balck);
`;

export default ProjectDetail;
