import { selector, selectorFamily } from 'recoil';
import qs from 'qs';
import { Tool } from '.';
import { searchState } from '../SearchBar/SearchBar.atom';
import { getTools } from '../../services/tools';
import { delay } from '../../utils/delay';
import { tagState } from '../Select/Select.atom';

const ToolListQuery = selectorFamily({
  key: 'ToolListQuery',
  get: (query: string) => async () => {
    await delay(2000);

    const { data } = await getTools(query);

    const totalCount = data?.length || 0;

    return {
      list: data || ([] as Tool[]),
      totalCount,
    };
  },
});

export const toolListState = selector({
  key: 'toolListState',
  get: async ({ get }) => {
    const tag = get(tagState);
    const q = get(searchState);

    const params = qs.stringify({
      q,
      tag,
    });

    return get(ToolListQuery(params));
  },
});
