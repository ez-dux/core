export interface Action<T extends string, P = null, M = null> {
  type: T;
  payload: P;
  meta: M;
}

export interface ActionCreator<T extends string, P = null, M = null> {
  (payload: P, meta: M): Action<T, P, M>;
  type: T;
}

export interface Selector<RootState, I> {
  (state: RootState): I;
}
