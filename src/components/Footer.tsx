import { openLinkInNewTab } from "@/utills/openLinkInNewTap";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  // const animation = useAnimation();
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["center end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer ref={footerRef}>
      <MainWrap>
        <div>
          <motion.h1 style={{ y, opacity }} transition={{ duration: 2 }}>
            안녕하세요, 만드는 것이 즐거운 개발자
            <br />
            우지수입니다.
          </motion.h1>
          <motion.p style={{ y, opacity }} transition={{ duration: 2 }}>
            디자인과 개발의 {""}
            <strong>창의적인 사고력과 논리적인 사고력을 결합</strong>하여
            <br />
            <strong>현실적이고 사용자 친화적인 서비스</strong>를 만들고자 합니다.
          </motion.p>
        </div>
      </MainWrap>
      <SubWrap>
        <p> &#169; {currentYear}</p>
        <p
          className="goGithub"
          onClick={() => {
            openLinkInNewTab("https://github.com/jisooround");
          }}
        >
          Github
        </p>
      </SubWrap>
    </FooterContainer>
  );
};

const FooterContainer = styled(motion.div)`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-black90);
  @media screen and (max-width: 960px) {
    height: auto;
    transition: all.3s;
  }
`;

const MainWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 30px 60px;
  box-sizing: border-box;
  color: var(--color-blue);
  h1 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
    font-size: 2rem;
    animation: fadein 1s;
  }
  p {
    padding-top: 30px;
    line-height: 1.5;
    font-size: 18px;
    animation: fadein 4s;
  }
  strong {
    font-weight: 700;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 30px;
    h1 {
      font-size: 18px;
      &:lang(ko) {
        word-break: keep-all;
      }
    }
    p {
      padding-top: 16px;
      &:lang(ko) {
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: auto;
    padding: 20px;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      padding-top: 10px;
    }
  }
`;

const SubWrap = styled.div`
  height: auto;
  color: var(--color-blue);
  padding: 1.875rem 3.75rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  .goGithub {
    cursor: pointer;
    z-index: 1000;
    font-weight: 700;
  }
  @media screen and (max-width: 960px) {
    padding: 30px;
  }
  @media screen and (max-width: 580px) {
    padding: 20px;
  }
`;

export default Footer;
