import get from 'lodash/get';
import join from 'lodash/join';
import isEmpty from 'lodash/isEmpty';
import { Selector } from '../types';

export function createSelector<RootState, I = null>(
  ...entries: string[]
): Selector<RootState, I> {
  return function selector(state: RootState): I {
    if (state && !isEmpty(entries)) {
      return get(state, join(entries, '.'));
    }
    throw new Error('The root state its empty or you didnt pass any entry');
  };
}
