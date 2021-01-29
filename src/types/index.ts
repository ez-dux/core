export interface Action<T extends string, P = null, M = null> {
  type: T;
  payload: P;
  meta: M;
}
export interface ActionWithOnlyType<T extends string> {
  type: T;
}
export interface ActionWithOnlyPayload<T extends string, P> {
  type: T;
  payload: P;
}

interface ActionCreatorStatic<T extends string> {
  type: T;
}
export interface ActionCreator<T extends string, P = null, M = null>
  extends ActionCreatorStatic<T> {
  (payload: P, meta: M): Action<T, P, M>;
}
export interface ActionCreatorWithOnlyPayload<T extends string, P>
  extends ActionCreatorStatic<T> {
  (payload: P): ActionWithOnlyPayload<T, P>;
}

export interface ActionCreatorWithNoParameters<T extends string>
  extends ActionCreatorStatic<T> {
  (): ActionWithOnlyType<T>;
}

export interface Selector<RootState, I> {
  (state: RootState): I;
}
