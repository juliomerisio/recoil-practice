import { selector, selectorFamily } from 'recoil';
import qs from 'qs';
import { SelectValue } from 'antd/lib/select';
import { searchState } from '../SearchBar/SearchBar.atom';
import { selectState } from '../Select/Select.atom';
import { read } from '../../services/tools';

const databaseCall = selectorFamily({
  key: 'databaseCall',
  get: (params) => async () => {
    // https://github.com/facebookexperimental/Recoil/issues/85
    const tools = await read(params);
    return tools;
  },
});

export const toolListState = selector({
  key: 'toolListState',
  get: async ({ get }) => {
    const tag = get(selectState);
    const q = get(searchState);
    let query = {} as { q?: string; tag?: SelectValue };

    if (q.length > 0) {
      query.q = q;
    }
    if (String(tag).length > 0) {
      query.tag = tag;
    }
    const params = qs.stringify(query);

    return get(databaseCall(params));
  },
});
