import { selector } from 'recoil';
import { map, flatten, pipe, uniq } from 'ramda';
import { getTools } from '../../services/tools';
import { Tool } from '../ToolsList';

export const selectOptions = selector({
  key: 'SelectOptions',
  get: async () => {
    const { data } = await getTools();

    const filters = pipe(
      map((item: Tool) => item?.tags),
      map((item) => item.replace(/\s/g, '').split(',')),
      flatten,
      uniq
    )(data);

    return filters || ([] as string[]);
  },
});
