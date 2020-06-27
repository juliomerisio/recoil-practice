import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useFormik } from 'formik';
import { Button } from '../Button';
import Modal from '../Modal';
import Tag from '../Tag';
import { modalState } from './Form.atoms';
import { createTool } from '../../services/tools';
import { optmisticState } from '../Optmistic/optmistic.atom';

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  background: var(--gray2);
  button {
    margin-top: 30px;
  }
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  border: 2px solid var(--black);
  border-radius: 3px;
  height: 39px;
  padding: 4px 10px;
  background: transparent;
  transition: all 0.1s ease-in;
  color: var(--primary);
  &:focus {
    border: 2px solid var(--primary);
    color: var(--primary);
  }
`;

const TextArea = styled.textarea`
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

export interface FormProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const Form = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [list, setOptmistic] = useRecoilState(optmisticState);

  const onSubmit = React.useCallback(
    async (data: FormProps) => {
      const tool = { ...data, tags: data.tags.join() };
      setOptmistic([{ ...tool, id: '12' }, ...list]);
      setIsOpen(false);
      try {
        await createTool(tool);
      } catch (error) {}
    },
    [list, setOptmistic]
  );

  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      link: '',
      description: '',
      tags: [] as string[],
    },
    onSubmit,
  });

  return (
    <Modal isOpen={isOpen} closeAction={() => setIsOpen(false)}>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Input
          placeholder="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          autoComplete="off"
        />
        <Input
          autoComplete="off"
          placeholder="Link"
          name="link"
          value={values.link}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <Tag onChange={setFieldValue} value={values.tags} />
        <Button>Add</Button>
      </FormContainer>
    </Modal>
  );
};

export default Form;
