import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Label = styled.label`
  span {
    color: red;
  }
`;

const MyTextArea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  border: 2px solid var(--black);
  border-radius: 3px;
  height: 39px;
  padding: 4px 10px;
  background: transparent;
  transition: all 0.1s ease-in;
  color: var(--primary);
  min-height: 120px;
  resize: none;
  &:focus {
    border: 2px solid var(--primary);
    color: var(--primary);
  }
`;

interface ITextAreaProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
}

const TextArea = ({
  name,
  onChange,
  value,
  error,
  touched,
}: ITextAreaProps) => {
  return (
    <Container>
      <Label>
        {name} <span>{touched && error}</span>
      </Label>
      <MyTextArea
        placeholder={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </Container>
  );
};

export default TextArea;
