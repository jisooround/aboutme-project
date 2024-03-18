import { AboutMeType } from "@/model/aboutme";
import { getAboutMe } from "@/service/aboutme";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AboutMe = () => {
  const [data, setData] = useState<AboutMeType>();
  useEffect(() => {
    const fetchData = async () => {
      const projectDetail = await getAboutMe();
      setData(projectDetail[0]);
    };

    fetchData();
  }, []);

  return (
    <ContainerStyle>
      <ItemStyle>
        <div className="main-image">
          <img src={data?.imageUrl} />
        </div>
        <div className="main-text">
          <h2>({data?.title})</h2>
          <p>{data?.description}</p>
        </div>
      </ItemStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  height: calc(100vh - 87px);
  margin-top: -87px !important;
  padding-top: 87px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--color-skyblue);
  @media ${(props) => props.theme.laptop} {
    /* margin: 40px auto; */
  }
`;

const ItemStyle = styled.div`
  width: 100%;
  height: calc(100vh - 174px);
  padding: 4rem 4rem 0 4rem;
  box-sizing: border-box;
  background-color: var(--color-skyblue);
  .main-image {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 70%;
    /* max-height: 555px; */
    border-radius: 70% 70% 0 0;
    border: 2px solid var(--color-white);
    overflow: hidden;
    img {
      width: 100%;
      /* max-height: 555px; */
    }
  }
  .main-text {
    display: grid;
    padding-top: 20px;
    grid-template-columns: 3fr 7fr;
    gap: 20px;
    h2 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-style: italic;
      color: var(--color-white);
      font-size: 4.625rem;
    }
    p {
      color: var(--color-white);
      line-height: 1.8;
      font-size: 1.3rem;
      &:lang(ko) {
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .main-text {
      h2 {
        font-size: 3.875rem;
        transition: all.2s;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .main-text {
      h2 {
        font-size: 3rem;
        transition: all.2s;
      }
    }
  }
  @media screen and (max-width: 970px) {
    padding: 3rem;
    .main-text {
      grid-template-columns: 1fr 1fr;
      h2 {
        font-size: 5rem;
        transition: all.2s;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 970px) {
    .main-text {
      h2 {
        font-size: 4.5rem;
        transition: all.2s;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .main-text {
      h2 {
        font-size: 64px;
        transition: all.2s;
      }
    }
  }
  @media screen and (max-width: 780px) {
    .main-text {
      display: flex;
      flex-wrap: wrap;
      h2 {
        width: 100%;
        text-align: center;
        transition: all.2s;
      }
      p {
        text-align: center;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 3rem;
    .main-image {
      width: 80%;
      height: auto;
      border-radius: 70%;
      margin: auto;
      object-fit: contain;
      transition: all.2s;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 420px) {
    padding: 2rem 1.5rem;
    .main-image {
      width: 90%;
      transition: all.2s;
    }
    .main-text {
      h2 {
        font-size: 36px;
      }
    }
  }
`;
export default AboutMe;
