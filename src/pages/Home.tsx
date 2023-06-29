import Navbar from "@/components/Navbar";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <ContainerStyle>
      <Navbar />
      Home
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  padding: var(--padding-default);
`;

export default Home;
