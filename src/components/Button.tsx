import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background: none;
  font-size: 18px;
  padding: 10px 20px;
  background: var(--primary);
  border-radius: 4px;
  color: var(--black);
  border: none;

  svg {
    font-size: 20px;
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
