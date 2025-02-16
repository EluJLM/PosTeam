import React from "react";
import styled from "styled-components";
import { useModalStore } from "./useModalStore";

export const ModalTwo = () => {
  const { isOpen, title, message, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen} onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <h2>{title}</h2>
        <p>{message}</p>
      </Content>
    </Overlay>
  );
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #d9534f;
`;

