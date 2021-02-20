import { ActionCreator } from '../types';

export function createActionCreator<
  P = undefined,
  T extends string = string,
  M = undefined
>(type: T): ActionCreator<P, T, M> {
  function actionCreator(payload: P, meta: M) {
    return {
      type,
      payload,
      meta,
    };
  }
  actionCreator.type = type;

  return actionCreator as ActionCreator<P, T, M>;
}
