import styled from "styled-components";

const Home = () => {
  return (
    <ContainerStyle>
      <p>Home</p>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-content: space-between;
  p {
    width: 100%;
  }
`;

export default Home;
