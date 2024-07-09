import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Test = () => {
  const navigate = useNavigate();
  return (
    <ContainerStyle>
      <TextWrap>
        <div>
          <h1>
            안녕하세요,
            <br />
            만드는 것이 즐거운 개발자
            <br />
            우지수입니다.
          </h1>
          <p>
            디자인과 개발의 {""}
            <strong>창의적인 사고력과 논리적인 사고력을 결합</strong>하여
            <br />
            <strong>현실적이고 사용자 친화적인 서비스</strong>를 만들고자 합니다.
          </p>
        </div>
      </TextWrap>
      <ButtonWrap>
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Project 👀
        </button>
      </ButtonWrap>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-content: center;
  width: 100%;
  padding: var(--padding-default);
  box-sizing: border-box;
  height: calc(100vh - 87px);
  @media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 620px) {
    padding: 1.5rem;
    justify-content: center;
  }
  @media screen and (max-width: 580px) {
    align-content: center;
    margin-top: -50px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-left: 60px;
  box-sizing: border-box;
  h1 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
    font-size: 3.4375rem;
    animation: fadein 1s;
  }
  p {
    padding-top: 30px;
    line-height: 1.5;
    font-size: 18px;
    animation: fadein 4s;
  }
  strong {
    font-weight: 700;
    color: var(--color-skyblue);
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    padding-left: 0;
    h1 {
      font-size: 46px;
      &:lang(ko) {
        word-break: keep-all;
      }
    }
    p {
      &:lang(ko) {
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: auto;
    padding-left: 0;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 32px;
    }
    p {
      text-align: center;
      font-size: 16px;
      padding-top: 10px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;
  /* TODO: 버튼 호버 효과 */
  button {
    margin-top: -20px;
    width: 100%;
    min-width: 140px;
    height: 60px;
    border-radius: 50px;
    border: 1px solid var(--color-black90);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-right: 0;
    height: auto;
    button {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 580px) {
    width: 50%;
  }
  @media screen and (max-width: 410px) {
    button {
      margin-top: 40px;
    }
  }
`;

export default Test;
