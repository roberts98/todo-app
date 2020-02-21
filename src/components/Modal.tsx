import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Colors } from '../contants/colors';

interface ModalProps {
  children: React.ReactNode;
  isOpen: Boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const elCopy = el;
    document.body.appendChild(el.current);

    return () => {
      document.body.removeChild(elCopy.current);
    };
  }, [el]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Wrapper>
      <Inner>
        {children}
        <Close onClick={onClose} />
      </Inner>
    </Wrapper>,
    el.current
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const Inner = styled.div`
  position: relative;
`;

const Close = styled.span`
  &::after,
  &::before {
    content: '';
    width: 2px;
    height: 20px;
    background-color: ${Colors.white};
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  &::before {
    transform: rotate(135deg);
  }

  &::after {
    transform: rotate(225deg);
  }
`;
