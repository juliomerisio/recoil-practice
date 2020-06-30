import { atom } from 'recoil';
import { SelectValue } from 'antd/lib/select';

export const selectState = atom({
  key: 'selectState',
  default: '' as SelectValue,
});
