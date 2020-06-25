import React from 'react';
import styled from 'styled-components';
import { MdSearch, MdAdd } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import { Button } from '../Button';
import { modalState } from '../Form/Form.atoms';
import Form from '../Form/Form';
import { searchState } from './SearchBar.atom';
import { debounce } from '../../utils/debounce';
import { Select } from '../Select/Select';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  span {
    color: var(--white);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: #393e44;
  border-radius: 30px;
  color: rgba(30, 33, 35, 0.51);
  max-width: 400px;
  width: 100%;
  height: 35px;
  padding: 4px 11px;
  font-size: 18px;
  margin: 0 37px 0 0;
  border: 2px solid #606469;
  transition: all 0.2s ease-in;
  svg {
    fill: #606469;
  }
  input {
    color: #606469;
  }
`;
const SearchInput = styled.input`
  background: none;
  width: 100%;
  color: #2c3035;
  border: 1px solid transparent;
  margin-left: 10px;
`;

const SearchBar = () => {
  const setIsOpen = useSetRecoilState(modalState);
  const setSearch = useSetRecoilState(searchState);

  return (
    <Container>
      <SearchContainer>
        <Search>
          <MdSearch />
          <SearchInput
            type="text"
            onChange={(e) =>
              debounce({
                value: e.target.value,
                action: setSearch,
              })
            }
          />
        </Search>
        <React.Suspense fallback={<div>...Loading</div>}>
          <Select />
        </React.Suspense>
      </SearchContainer>
      <Button onClick={() => setIsOpen(true)}>
        <MdAdd />
        Add
      </Button>
      <React.Suspense fallback={<div>...Loading</div>}>
        <Form />
      </React.Suspense>
    </Container>
  );
};

export default SearchBar;
