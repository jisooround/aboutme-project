import styled from "styled-components";
interface TransitionProps {
  transition?: boolean;
}

const Gradient = ({ transition }: TransitionProps) => {
  if (!transition) return null;
  return <GradientContainer transition={transition ?? false}></GradientContainer>;
};

const GradientContainer = styled.div<TransitionProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0) 100%);
`;
export default Gradient;
