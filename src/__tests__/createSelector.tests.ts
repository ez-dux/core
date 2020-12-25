import { expect } from 'chai';
import { createSelector } from '../selectors';

const fakeReduxRootState = {
  namespace: {
    variable: 1234,
  },
};

describe('Tests createSelector function', () => {
  it('It is a function', () => {
    expect(createSelector).to.be.a('function');
  });
  it('It returns a function', () => {
    const selector = createSelector<typeof fakeReduxRootState, number>(
      'namespace',
      'variable',
    );
    expect(selector).to.be.a('function');
  });
  it('It returns the right value when used', () => {
    const selector = createSelector<typeof fakeReduxRootState, number>(
      'namespace',
      'variable',
    );

    const result = selector(fakeReduxRootState);
    expect(result).to.be.equal(fakeReduxRootState.namespace.variable);
  });
  it('It throws an error when has no entries', () => {
    const selector = createSelector<typeof fakeReduxRootState, number>();
    expect(() => {
      selector(fakeReduxRootState);
    }).to.throw('The root state its empty or you didnt pass any entry');
  });
});
