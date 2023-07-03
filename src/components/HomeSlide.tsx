import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import MulitCarousel from "./ui/MultiCarousel";

const HomeSlide = () => {
  return (
    <ContainerStyle>
      <div>
        <p>🍧</p>
        <p>🍡</p>
        <p>✨</p>
        <p>🩵</p>
      </div>
      <div>
        <p>🍧</p>
        <p>🍡</p>
        <p>✨</p>
        <p>🩵</p>
      </div>
      <div>
        <p>🍧</p>
        <p>🍡</p>
        <p>✨</p>
        <p>🩵</p>
      </div>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: -30px;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  padding: 3.125rem 0;
  box-sizing: border-box;
  div {
    display: flex;
    animation: loop 20s infinite linear;
    p {
      display: inline;
      align-items: center;
      font-size: 23.75rem;
      font-style: normal;
      padding: 0 6.25rem;
      box-sizing: border-box;
      @media ${(props) => props.theme.laptop} {
        font-size: 240px;
      }
    }
  }
  @keyframes loop {
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;
export default HomeSlide;
