import { expect } from 'chai';
import { createActionCreator } from '../actions';

describe('Tests createActionCreator function', () => {
  it('Returns a function', () => {
    const action = createActionCreator<'TEST'>('TEST');
    expect(action).to.be.a('function');
    expect(action()).to.be.a('object');
  });
  it('Returns a the type as static', () => {
    const action = createActionCreator<'TEST'>('TEST');
    expect(action().type).to.be.eq('TEST');
  });
  it('Returns the action', () => {
    const action = createActionCreator<'TEST', { test: 'uu' }>('TEST');
    expect(action({ test: 'uu' })).to.be.deep.eq({
      type: 'TEST',
      payload: { test: 'test' },
      meta: null,
    });
  });
});
