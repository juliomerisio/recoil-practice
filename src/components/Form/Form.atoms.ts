import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
});
export const formState = atom({
  key: 'formState',
  default: {
    name: '',
    description: '',
    link: '',
    tags: [] as string[],
  },
});
