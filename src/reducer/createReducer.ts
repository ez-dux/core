import { Action, ActionCreator, Reducer } from '../types';
import { Any } from 'ts-toolbelt';

export function createReducer<A extends Action, S>(
  initialState: S,
): Reducer<A, S> & {
  addCase: <
    AC extends ActionCreator<
      Any.At<A, 'payload'>,
      Any.At<A, 'type'>,
      Any.At<A, 'meta'>
    >
  >(
    actionCreator: AC,
    callback: (state: S, action: ReturnType<AC>) => S,
  ) => void;
} {
  const cases = {};
  function addCase<AC extends ActionCreator>(
    actionCreator: AC,
    callback: (state: S, action: ReturnType<AC>) => S,
  ) {
    cases[actionCreator.type] = callback;
  }
  function reducer(state: S = initialState, action: A) {
    if (action.type in cases) {
      return cases[action.type](state, action);
    }
    return state;
  }
  reducer.addCase = addCase;
  return reducer;
}
