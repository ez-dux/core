import { expect } from 'chai';
import { createActionCreator } from '../actions';

describe('Tests createActionCreator function', () => {
  it('Returns a function', () => {
    const action = createActionCreator('TEST');
    expect(action).to.be.a('function');
    expect(action()).to.be.a('object');
  });
  it('Returns a the type as static', () => {
    const action = createActionCreator<'TEST'>('TEST');
    expect(action.type).to.be.eq('TEST');
  });
  it('Returns the action with payload', () => {
    const action = createActionCreator<{ test: 'uu' }>('TEST');
    expect(action({ test: 'uu' })).to.be.deep.eq({
      type: 'TEST',
      payload: { test: 'uu' },
      meta: undefined,
    });
  });
  it('Returns the action with payload and meta', () => {
    const action = createActionCreator<{ test: 'uu' }, 'TEST', { id: 'bb' }>(
      'TEST',
    );
    expect(action({ test: 'uu' }, { id: 'bb' })).to.be.deep.eq({
      type: 'TEST',
      payload: { test: 'uu' },
      meta: { id: 'bb' },
    });
  });
});
