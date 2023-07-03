import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectModal = ({ children, setOpenModal }: Props) => {
  return (
    <ModalStyle
      onClick={(event: any) => {
        if (event.target === event.currentTarget) {
          setOpenModal(false);
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => {
          setOpenModal(false);
          console.log("click");
        }}
      >
        <RxCross1 />
      </button>
      {children}
    </ModalStyle>
  );
};

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
`;
export default ProjectModal;
