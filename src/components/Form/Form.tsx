import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';
import { Button } from '../Button';
import Modal from '../Modal';
import Tag from '../Tag';
import { modalState } from './Form.atoms';
import { optmisticState } from '../Optmistic/Optmistic.atom';
import { create } from '../../services/tools';
import TextArea from '../TextArea';
import Input from '../Input';

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

export interface FormProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title field is required'),
  link: Yup.string()
    .required('Link field is required')
    .url('Must be a valid url'),
  description: Yup.string().required('Description field is required'),
  tags: Yup.array()
    .of(Yup.string().required('Choose a tag'))
    .required('Tag field is required'),
});

const Form = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [list, setOptmistic] = useRecoilState(optmisticState);

  const onSubmit = React.useCallback(
    async (data: FormProps) => {
      const id = uuid();

      const newTool = { ...data, tags: data.tags.join() };

      const isNameAlreadyTaken = list.find(
        (tool) => tool?.title === data.title
      );

      if (isNameAlreadyTaken) {
        setFieldError('title', 'Choose another title');
      }

      if (!isNameAlreadyTaken) {
        setOptmistic([{ ...newTool, id }, ...list]);
        setIsOpen(false);
      }

      try {
        await create(newTool);
      } catch (error) {
        const removeTool = list.filter((t) => t.id !== id);
        setOptmistic(removeTool);
      }
    },
    [list, setOptmistic, setIsOpen]
  );

  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    touched,
    errors,
    setFieldError,
  } = useFormik({
    initialValues: {
      title: '',
      link: '',
      description: '',
      tags: [] as string[],
    },
    onSubmit,
    validationSchema,
  });

  return (
    <Modal isOpen={isOpen} closeAction={() => setIsOpen(false)}>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Input
          name="title"
          value={values.title}
          touched={touched.title}
          error={errors.title}
          onChange={handleChange}
        />
        <Input
          name="link"
          value={values.link}
          touched={touched.link}
          error={errors.link}
          onChange={handleChange}
        />
        <TextArea
          name="description"
          value={values.description}
          touched={touched.description}
          error={errors.description}
          onChange={handleChange}
        />
        <Tag
          onChange={setFieldValue}
          value={values.tags}
          touched={touched.tags}
          error={errors.tags}
        />
        <Button>Add</Button>
      </FormContainer>
    </Modal>
  );
};

export default Form;
