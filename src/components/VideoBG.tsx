import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const VideoBG = () => {
  const [frameSrc, setFrameSrc] = useState<string[]>([]);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    updateAtScroll();
  }, [frameSrc]);

  const updateAtScroll = () => {
    const totalFrames = 50;
    const progress = scrollYProgress.get();
    const frameIndex = Math.floor(progress * totalFrames);
    setFrameSrc([`/frames/frame_${String(frameIndex).padStart(4, "0")}.webp`]);
  };

  return (
    <VideoContainer layout>
      <motion.div ref={videoRef}>{frameSrc.length > 0 && <img src={frameSrc[0]} alt={"test"} width="100%" style={{ opacity: 0.8 }} />}</motion.div>
    </VideoContainer>
  );
};

const VideoContainer = styled(motion.div)`
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  div {
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      min-height: 100vh;
      object-fit: cover;
    }
  }
`;
export default VideoBG;
