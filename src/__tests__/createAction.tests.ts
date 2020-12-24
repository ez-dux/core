import { expect } from 'chai';
import { createAction } from '../actions';

describe('Tests createAction function', () => {
  it('Returns a function', () => {
    const action = createAction<'TEST'>('TEST');
    expect(action).to.be.a('function');
    expect(action(null, null)).to.be.a('object');
  });
  it('Returns a the type as static', () => {
    const action = createAction<'TEST'>('TEST');
    expect(action(null, null).type).to.be.eq('TEST');
  });
  it('Returns the action', () => {
    const action = createAction<'TEST', { test: 'test' }>('TEST');
    expect(action({ test: 'test' }, null)).to.be.deep.eq({
      type: 'TEST',
      payload: { test: 'test' },
      meta: null,
    });
  });
});
