import { selector } from 'recoil';
import qs from 'qs';
import { SelectValue } from 'antd/lib/select';
import { searchState } from '../SearchBar/SearchBar.atom';
import { tagState } from '../Select/Select.atom';

export const toolListState = selector({
  key: 'toolListState',
  get: async ({ get }) => {
    const tag = get(tagState);
    const q = get(searchState);
    let query = {} as { q?: string; tag?: SelectValue }; //eslint-disable-line

    if (q.length > 0) {
      query.q = q;
    }
    if (String(tag).length > 0) {
      query.tag = tag;
    }
    const params = qs.stringify(query);

    return params;
  },
});
