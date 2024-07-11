import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Intro = () => {
  const [frameSrc, setFrameSrc] = useState<string>("https://jisooround.s3.ap-northeast-2.amazonaws.com/aboutme/frame_0000.webp");
  // const [frameSrc, setFrameSrc] = useState<string>("/frames/frame_0000.webp");
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const totalFrames = 100;
  const rightTransform = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  const leftTransform = useTransform(scrollYProgress, [0, 1], [1000, -1000]);

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
          <motion.div style={{ x: rightTransform }}>Front-end Developer</motion.div>
          <motion.div style={{ x: leftTransform }}>for User Experience</motion.div>
        </IntroWrap>
        {frameSrc && <img src={frameSrc} alt="frame" width="100%" />}
      </StickyContainer>
    </VideoContainer>
  );
};

const VideoContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  scroll-snap-align: start;
`;

const IntroWrap = styled.div`
  width: 100%;
  height: calc(100vh - 87px);
  margin-top: 87px;
  mix-blend-mode: difference;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
    bottom: 0;
    font-size: 100px;
    font-weight: 700;
    color: var(--color-white);
    /* animation: fadein 1s; */
    &:nth-child(2) {
      text-align: right;
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
