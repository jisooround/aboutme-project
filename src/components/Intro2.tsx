import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Intro = () => {
  const [frameSrc, setFrameSrc] = useState<string>("https://jisooround.s3.ap-northeast-2.amazonaws.com/aboutme/frame_0000.webp");
  // const [frameSrc, setFrameSrc] = useState<string>("/frames/frame_0000.webp");
  const videoRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (leftRef.current && rightRef.current) {
        setWindowWidth(window.innerWidth);
        setLeftWidth(leftRef.current.offsetWidth);
        setRightWidth(rightRef.current.offsetWidth);
      }
    };

    updateDimensions(); // Update dimensions initially
    window.addEventListener("resize", updateDimensions); // Update dimensions on window resize

    return () => {
      window.removeEventListener("resize", updateDimensions); // Cleanup event listener
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const totalFrames = 100;
  const rightTransform = useTransform(scrollYProgress, [0, 1], [windowWidth, -rightWidth]);
  const leftTransform = useTransform(scrollYProgress, [0, 1], [-leftWidth, windowWidth]);

  const preloadImages = (frameCount: number) => {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `https://jisooround.s3.ap-northeast-2.amazonaws.com/aboutme/frame_${String(i).padStart(4, "0")}.webp`;
    }
  };

  useEffect(() => {
    preloadImages(totalFrames);
  }, []);
  useEffect(() => {
    // 스크롤 진행도에 따라 프레임 이미지를 업데이트하는 함수
    const updateAtScroll = (progress: number) => {
      const frameIndex = Math.floor(progress * totalFrames);
      const src = `https://jisooround.s3.ap-northeast-2.amazonaws.com/aboutme/frame_${String(frameIndex).padStart(4, "0")}.webp`;
      // const src = `/frames/frame_${String(frameIndex).padStart(4, "0")}.webp`;
      if (frameSrc !== src) {
        setFrameSrc(src);
      }
    };

    // 초기 스크롤 진행도 값을 가져와서 프레임 업데이트
    updateAtScroll(scrollYProgress.get());

    // 스크롤 진행도 변경 시 업데이트
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      updateAtScroll(progress);
    });

    // 컴포넌트 언마운트 시 이벤트 해제
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <VideoContainer>
      <StickyContainer ref={videoRef}>
        <IntroWrap>
          <motion.div
            ref={leftRef}
            style={{
              x: leftTransform,
              // position: "absolute",
              // top: "87px",
              // left: 0,
            }}
          >
            Front-end Developer
          </motion.div>
          <motion.div
            ref={rightRef}
            style={{
              x: rightTransform,
              // position: "absolute",
              // bottom: 0,
              // right: 0,
            }}
          >
            for User Experience
          </motion.div>
        </IntroWrap>
        {frameSrc && <img src={frameSrc} alt="frame" width="100%" />}
      </StickyContainer>
    </VideoContainer>
  );
};

const VideoContainer = styled(motion.div)`
  max-width: 100vw;
  min-width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
`;

const IntroWrap = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  height: 100%;
  /* margin-top: 87px; */
  mix-blend-mode: difference;
  position: absolute;
  /* background-color: aqua; */
  border: 10px solid red;
  border-style: inset;
  div {
    width: 100%;
    /* display: flex;
    justify-content: flex-start; */
    font-size: 100px;
    font-weight: 700;
    color: var(--color-white);
    &:nth-child(2) {
      /* justify-content: flex-end; */
    }
  }
  @media screen and (max-width: 960px) {
    div {
      font-size: 78px;
      margin: 0;
    }
  }
  @media screen and (max-width: 580px) {
    div {
      font-size: 50px;
    }
  }
`;

const StickyContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
  }
`;
export default Intro;
