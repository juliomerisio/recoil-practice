import { selector } from 'recoil';
import { uniq } from 'ramda';
import { toolState } from '../ToolsList/ToolList.atoms';

export const toolOptmisticListState = selector({
  key: 'toolOptmisticListState',
  get: async ({ get }) => {
    const toolOptmistic = get(toolState);

    const uniqTools = uniq(toolOptmistic);

    return uniqTools;
  },
});
