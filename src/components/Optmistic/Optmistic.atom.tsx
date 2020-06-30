import { atom } from 'recoil';
import { Tool } from '../ToolsList';

export const optmisticState = atom({
  key: 'optmisticState',
  default: [] as Tool[],
});
