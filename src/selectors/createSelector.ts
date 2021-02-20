import get from 'lodash/get';
import join from 'lodash/join';
import isEmpty from 'lodash/isEmpty';
import { Selector } from '../types';

export function createSelector<R, I = null>(
  ...entries: string[]
): Selector<R, I> {
  return function selector(state: R): I {
    if (state && !isEmpty(entries)) {
      return get(state, join(entries, '.'));
    }
    throw new Error('The root state its empty or you didnt pass any entry');
  };
}
