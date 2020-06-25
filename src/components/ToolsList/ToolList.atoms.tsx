import { atom } from 'recoil';
import { Tool } from '.';

export const toolState = atom({
  key: 'ToolState',
  default: [] as Tool[],
});
