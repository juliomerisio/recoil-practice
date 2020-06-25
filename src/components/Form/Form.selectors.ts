import { selector } from 'recoil';
import { formState } from './Form.atoms';
import { toolState } from '../ToolsList/ToolList.atoms';

export const submitForm = selector({
  key: 'submitForm',
  get: async ({ get }) => {
    const test = get(formState);
    const list = get(toolState);

    return {
      list: [...list, test],
    };
  },
});
