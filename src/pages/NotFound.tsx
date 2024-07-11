import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3>NOT FOUND PAGE</h3>
      <button>
        <Link to="/">GO TO HOME</Link>
      </button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1.5rem;
    color: var(--color-black90);
    margin-bottom: 30px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--color-black90);
    border: none;
    cursor: pointer;
    border-radius: 0.375rem;
    a {
      color: var(--color-white);
    }
  }
`;

export default NotFound;
