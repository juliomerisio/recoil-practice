import { atom } from 'recoil';

export const searchState = atom({
  key: 'SearchState',
  default: '',
});
export const checkboxState = atom({
  key: 'CheckboxState',
  default: false,
});
