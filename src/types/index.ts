import { A } from 'ts-toolbelt';

interface ActionWithOnlyType<T extends string = string> {
  type: T;
}
interface ActionWithOnlyPayload<P = undefined, T extends string = string>
  extends ActionWithOnlyType<T> {
  payload: P;
}
interface ActionWithPayloadAndMeta<
  P = undefined,
  T extends string = string,
  M = undefined
> extends ActionWithOnlyPayload<P, T> {
  payload: P;
  meta: M;
}

export type Action<
  P = undefined,
  T extends string = string,
  M = undefined
> = M extends undefined
  ? P extends undefined
    ? ActionWithOnlyType<T>
    : ActionWithOnlyPayload<P, T>
  : ActionWithPayloadAndMeta<P, T, M>;

interface ActionCreatorStatic<T extends string> {
  type: T;
}
interface ActionCreatorWithNoParameters<T extends string>
  extends ActionCreatorStatic<T> {
  (): Action<T>;
}

interface ActionCreatorWithOnlyPayload<P = undefined, T extends string = string>
  extends ActionCreatorStatic<T> {
  (payload: P): Action<P, T>;
}

interface ActionCreatorWithPayloadAndMeta<
  P = undefined,
  T extends string = string,
  M = undefined
> extends ActionCreatorStatic<T> {
  (payload: P, meta: M): Action<P, T, M>;
}

export type ActionCreator<
  P = undefined,
  T extends string = string,
  M = undefined
> = M extends undefined
  ? P extends undefined
    ? ActionCreatorWithNoParameters<T>
    : ActionCreatorWithOnlyPayload<P, T>
  : ActionCreatorWithPayloadAndMeta<P, T, M>;

export interface Selector<RootState, I> {
  (state: RootState): I;
}

export interface Reducer<A extends Action, S> {
  (state: S, action: A): S;
}
