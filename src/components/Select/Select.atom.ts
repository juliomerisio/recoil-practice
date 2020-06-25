import { atom } from 'recoil';
import { SelectValue } from 'antd/lib/select';

export const tagState = atom({
  key: 'tagState',
  default: '' as SelectValue,
});
