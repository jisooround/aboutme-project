import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import MulitCarousel from "./ui/MultiCarousel";

const HomeSlide = () => {
  const slideContent = [
    {
      id: 0,
      imgUrl: "",
      bgcolor: "var(--color-pink)",
    },
    {
      id: 1,
      imgUrl: "",
      bgcolor: "var(--color-black10)",
    },
    {
      id: 2,
      imgUrl: "",
      bgcolor: "var(--color-black50)",
    },
    {
      id: 3,
      imgUrl: "",
      bgcolor: "var(--color-black70)",
    },
    {
      id: 4,
      imgUrl: "",
      bgcolor: "var(--color-black40)",
    },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SlideStyle>
      <div>
        {/* <MulitCarousel> */}
        {slideContent.map((item) => (
          <p style={{ background: `${item.bgcolor}` }} key={item.id}>
            {item.id}
          </p>
        ))}
      </div>
      {/* </MulitCarousel> */}
    </SlideStyle>
  );
};

const SlideStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* display: flex; */
  overflow: hidden;
  display: grid;
  div {
    width: 4000px;
    display: flex;
    flex-shrink: 0;
    animation: loop 3s linear infinite;
  }
  p {
    width: 800px;
    height: 600px;
  }

  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-500%);
    }
  }

  /* animation: slide 30s linear infinite;
  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-1500px, 0, 0);
    }
  } */
`;
export default HomeSlide;
