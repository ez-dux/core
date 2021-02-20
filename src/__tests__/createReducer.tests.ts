import { expect } from 'chai';
import { createReducer } from '../reducer';
import { createActionCreator } from '../actions';

const addData = createActionCreator<string[]>('add_data');
const addMoreData = createActionCreator<{ data: string[] }>('add_more_data');
const addWrongData = createActionCreator('add_wrong_data');

class State {
  data: string[] | null = null;
  loading = false;
}

type Action =
  | ReturnType<typeof addData>
  | ReturnType<typeof addMoreData>
  | ReturnType<typeof addWrongData>;

const INITIAL = new State();

describe('Tests createReducer function', () => {
  it('is a function', () => {
    expect(createReducer).to.be.a('function');
  });
  it('returns a function', () => {
    const reducer = createReducer<Action, State>(INITIAL);
    expect(reducer).to.be.a('function');
  });
  it('returns a state as default case', () => {
    const reducer = createReducer<Action, State>(INITIAL);
    expect(reducer(INITIAL, addWrongData())).to.be.deep.eq(INITIAL);
  });
  it('returns expected value', () => {
    const reducer = createReducer<Action, State>(INITIAL);

    reducer.addCase(addData, (state, action) => ({
      ...state,
      data: action.payload,
      loading: true,
    }));

    reducer.addCase(addMoreData, (state, action) => ({
      ...state,
      data: action.payload.data,
      loading: true,
    }));
    // reducer.addCase(addWrongData, (state, action) => ({
    //   ...state,
    //   data: action.payload.data,
    //   loading: true,
    // }));
    expect(reducer(INITIAL, addData(['a', 'b']))).to.be.deep.eq({
      data: ['a', 'b'],
      loading: true,
    });
  });
});
