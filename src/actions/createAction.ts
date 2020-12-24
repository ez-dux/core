import { ActionCreator, Action } from '../types';

export function createAction<T extends string, P = null, M extends null = null>(
  type: T,
): ActionCreator<T, P, M> {
  function action(payload: P, meta: M): Action<T, P, M> {
    return {
      type,
      payload,
      meta,
    };
  }
  action.type = type;
  return action;
}
