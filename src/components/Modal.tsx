import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

export const FullScreen = styled.div<{ open: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(p) => (p.open === 1 ? 'flex' : 'none')};
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  animation: fadeIn 380ms ease;
  > div {
    max-width: 800px;
    width: 100%;
    height: 673px;
    margin: 160px 0 0 0;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    cursor: default;
    animation: slideIn 350ms ease;
  }
`;

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  closeAction: () => void;
}

export default function Modal({ isOpen, children, closeAction }: ModalProps) {
  const modal = useRef(null);

  const handleKeyUp = useCallback(
    (e) => {
      const keys: any = {
        27: () => {
          e.preventDefault();
          closeAction();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [closeAction]
  );

  // Handle the mouse click on overlay to close modal.
  const handleOutsideClick = useCallback(
    (e) => {
      // @ts-ignore
      if (modal.current.parentNode === e.target) {
        closeAction();
        document.removeEventListener('click', handleOutsideClick, false);
      }
    },
    [closeAction]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick, isOpen]);

  return (
    <FullScreen open={isOpen ? 1 : 0}>
      <div ref={modal}>{children}</div>
    </FullScreen>
  );
}
