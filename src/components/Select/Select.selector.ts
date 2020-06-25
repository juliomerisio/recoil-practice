import { selector } from 'recoil';
import { map, flatten, pipe, uniq, toUpper } from 'ramda';
import { getTools } from '../../services/tools';
import { delay } from '../../utils/delay';
import { Tool } from '../ToolsList';

export const selectOptions = selector({
  key: 'SelectOptions',
  get: async () => {
    await delay(2000);
    const { data } = await getTools();

    const filters = pipe(
      map((item: Tool) => item?.tags),
      flatten,
      uniq,
      map(toUpper)
    )(data);

    return filters || ([] as string[]);
  },
});
