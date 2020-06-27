import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { MdDelete } from 'react-icons/md';
import { toolListState } from './ToolList.selectors';
import { deleteToolById, getTools } from '../../services/tools';
import { optmisticState } from '../Optmistic/optmistic.atom';

const Container = styled.div``;
const CardContainer = styled.div`
  position: relative;
  min-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  background: var(--gray2);
  border-radius: 3px;
  margin-bottom: 15px;
  justify-content: space-between;
  a {
    color: var(--primary);
    font-weight: bold;
    font-size: 18px;
  }
  small {
    padding: 5px;
    margin-right: 5px;
    color: var(--transparent);
  }
  p {
    margin-top: 5px;
  }
`;
const Info = styled.div``;
const Delete = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  border: none;
  color: #e33d66;
  background: none;
  padding: 10px;
  font-size: 15px;
`;

type CardProps = {
  data: Tool;
};

export type Tool = {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string;
};

const Tags = styled.div``;

const Card = ({
  data: { title, link, description, tags: stringTags },
}: CardProps) => {
  const [list, setOptmistic] = useRecoilState(optmisticState);

  const tags = React.useMemo(() => {
    return stringTags.replace(/\s/g, '').split(',');
  }, [stringTags]);

  const onDelete = React.useCallback(async () => {
    const removeToolFromList = list.filter((tool) => tool.title !== title);
    setOptmistic(removeToolFromList);
    await deleteToolById(title);
  }, [title, list, setOptmistic]);

  return (
    <CardContainer>
      <Info>
        <a href={link} target="blank">
          {title}
        </a>
        <p>{description}</p>
      </Info>
      <Tags>
        {tags?.map((tag) => (
          <small key={tag}>#{tag}</small>
        ))}
      </Tags>
      <Delete onClick={() => onDelete()}>
        <MdDelete />
      </Delete>
    </CardContainer>
  );
};

const ToolsList = () => {
  const params = useRecoilValue(toolListState);
  const [tools, optmistic] = useRecoilState(optmisticState);
  const reset = useResetRecoilState(optmisticState);
  console.log(tools);

  useEffect(() => {
    getTools(params).then((resp) => {
      reset();
      optmistic(resp.data);
    });
  }, [optmistic, params]);

  return (
    <Container>
      {tools?.map((item: Tool) => (
        <Card key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default ToolsList;
