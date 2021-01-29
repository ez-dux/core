import {
  ActionCreator,
  ActionCreatorWithNoParameters,
  ActionCreatorWithOnlyPayload,
  Action,
  ActionWithOnlyPayload,
  ActionWithOnlyType,
} from '../types';

export function createActionCreator<T extends string, P = null, M = null>(
  type: T,
): M extends null
  ? P extends null
    ? ActionCreatorWithNoParameters<T>
    : ActionCreatorWithOnlyPayload<T, P>
  : ActionCreator<T, P, M> {
  function actionCreator(payload: P, meta: M): Action<T, P, M>;
  function actionCreator(payload: P): ActionWithOnlyPayload<T, P>;
  function actionCreator(): ActionWithOnlyType<T> {
    return {
      type,
      payload: (null as unknown) as P,
      meta: null,
    };
  }
  actionCreator.type = type;

  return (actionCreator as unknown) as M extends null
    ? P extends null
      ? ActionCreatorWithNoParameters<T>
      : ActionCreatorWithOnlyPayload<T, P>
    : ActionCreator<T, P, M>;
}
