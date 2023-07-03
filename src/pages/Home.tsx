import HomeSlide from "@/components/HomeSlide";
import styled from "styled-components";

const Home = () => {
  return (
    <ContainerStyle>
      <p>Hello, I'm ji soo. 😊</p>
      <HomeSlide />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  position: relative;
  p {
    width: 100%;
    font-weight: 100;
    text-align: center;
    font-style: italic;
    font-size: 3.75rem;
    margin-top: 4.0625rem;
  }
`;

export default Home;
