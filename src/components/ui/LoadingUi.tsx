import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";

const LoadingUi = () => {
  return (
    <LoadingStyle>
      <InfinitySpin width="200" color={`var(--color-skyblue)`} />
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: var(--color-white);
  text-align: center;
  padding-top: 100px;
`;

export default LoadingUi;
