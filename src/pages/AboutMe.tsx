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

  console.log(data);
  return (
    <ContainerStyle>
      <ItemStyle>
        <img src={data?.imageUrl} />
        <div>
          <h4>{data?.icon}</h4>
          <h3>{data?.title}</h3>
          <p>{data?.description}</p>
        </div>
      </ItemStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 80px auto;
  justify-content: center;
  @media ${(props) => props.theme.laptop} {
    margin: 40px auto;
  }
`;

const ItemStyle = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  img {
    justify-content: center;
    width: 40%;
    min-width: 21.875rem;
    aspect-ratio: 1 / 1;
    border: 5px solid var(--color-pink);
    box-sizing: border-box;
    border-radius: 50%;
  }
  div {
    width: 100%;
    padding: 2.5rem;
    h3 {
      font-size: 2.75rem;
      font-weight: 600;
      padding-bottom: 1.25rem;
    }
    h4 {
      font-size: 3.625rem;
      font-weight: 600;
      padding-bottom: 1.25rem;
    }
    p {
      width: 100%;
      line-height: 2.125rem;
      font-size: 1.375rem;
      font-weight: 200;
    }
    @media ${(props) => props.theme.laptop} {
      text-align: center;
    }
  }
  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
  }
`;
export default AboutMe;
