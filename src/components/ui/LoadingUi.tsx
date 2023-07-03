import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";

const LoadingUi = () => {
  return (
    <LoadingStyle>
      <InfinitySpin width="200" color="#4fa94d" />
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  /* display: flex;
  justify-content: center; */
  text-align: center;
  padding-top: 150px;
`;

export default LoadingUi;
