import { selector } from 'recoil';
import { map, flatten, pipe, uniq } from 'ramda';
import { Tool } from '../ToolsList';
import { optmisticState } from '../Optmistic/optmistic.atom';

export const selectOptions = selector({
  key: 'SelectOptions',
  get: async ({ get }) => {
    const data = get(optmisticState);

    const filters = pipe(
      map((item: Tool) => item?.tags),
      map((item) => item.replace(/\s/g, '').split(',')),
      flatten,
      uniq
    )(data);

    return filters || ([] as string[]);
  },
});
