import VideoBG from "@/components/VideoBG";
import styled from "styled-components";
type Props = {};

const Test = (props: Props) => {
  return (
    <HomeContainer>
      <IntroWrap>
        <div>Front-end Developer</div>
        <div>for User Experience</div>
      </IntroWrap>
      <VideoBG />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 3000px;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IntroWrap = styled.div`
  width: 100%;
  height: calc(100vh - 87px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  mix-blend-mode: difference;
  top: 87px;
  div {
    bottom: 0;
    font-size: 100px;
    font-weight: 700;
    color: var(--color-white);

    animation: fadein 1s;
    &:nth-child(2) {
      text-align: right;
    }
  }
`;
export default Test;
