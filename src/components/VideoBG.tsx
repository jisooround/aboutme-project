import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";

const VideoBG = () => {
  const videoRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();
  const [frameSrc, setFrameSrc] = useState<string[]>([]);
  const totalFrames = 150;

  // const updateAtScroll = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     const progress = scrollYProgress.get();
  //     const videoDuration = video.duration * 2; // 두 번 반복하도록 길이를 두 배로 계산
  //     const currentFrame = Math.floor(progress * videoDuration) % video.duration;
  //     if (Math.abs(video.currentTime - currentFrame) > 0.1) {
  //       video.currentTime = currentFrame;
  //     }
  //   }
  // };

  useEffect(() => {
    // 스크롤 이벤트를 쓰로틀링하여 성능 최적화
    const throttledUpdate = throttle(updateAtScroll, 80);

    const unsubscribe = scrollYProgress.on("change", throttledUpdate);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const updateAtScroll = () => {
    const video = videoRef.current;
    if (video) {
      const progress = scrollYProgress.get();
      const frameIndex = Math.floor(progress * totalFrames);
      setFrameSrc([`/frames/frame_${String(frameIndex).padStart(4, "0")}.png`]);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 첫 번째 프레임 설정

    // 스크롤 이벤트를 쓰로틀링하여 성능 최적화
    const throttledUpdate = throttle(updateAtScroll, 80);

    const unsubscribe = scrollYProgress.on("change", throttledUpdate);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <VideoContainer>
      =<div ref={videoRef}>{frameSrc.length > 0 && <img src={frameSrc[0]} alt={"test"} width="100%" />}</div>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  height: 100vh;
  width: 100%;
  h2 {
    font-size: 54px;
    font-weight: 500;
    z-index: 999;
    position: fixed;
    top: 300px;
    left: 0;
    /* mix-blend-mode: difference; */
    color: var(--color-black90);
  }
  div {
    background-image: url("/frames/frame_0001.png");
    background-size: cover;
    background-position: center center;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
    img {
      width: 100%;
      min-height: 100vh;
      object-fit: cover;
    }
    /* mix-blend-mode: difference; */
  }
`;

export default VideoBG;
