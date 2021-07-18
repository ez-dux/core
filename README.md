# @ez-dux/core

# Summary

Library to make life easier when using redux.

# Motivation

Redux boilerplate is hard and extensive.

# Functions

- createActionCreator();

```jsx
import { createActionCreator } from '@ez-dux/core';

const actionCreator = createActionCreator<Payload, Meta>('actionName');
```

- createReducer();

```jsx
import { createActionCreator, createReducer, createHandlers } from '@ez-dux/core';

class State {
  data: string[] | null = null;
}

const INITIAL = new State();

const addData = createActionCreator<Payload>('addData');

const reducer = createReducer<Action, State>(INITIAL);

reducer.addCase(addData, (state, action) => ({
   ...state,
   data: action.payload,
}));

// OR
const handlers = createHandlers([
addData, 
(state, action) => ({
   ...state,
   data: action.payload,
})
])
const reducer = createReducer<Action, State>(INITIAL, handlers);

```

- createSelector();

```jsx
// improve auto type. 
import { createSelector } from '@ez-dux/core';
const selector = createSelector<State, State['namespace']['variable']>(
      'namespace',
      'variable',
    );
```

- createHandlers();

```jsx
// TODO
const handlers = createHandlers([
addData, 
(state, action) => ({
   ...state,
   data: action.payload,
})
])
```

- createHandler();

```jsx
const handler = createHandlers(addData, (state, action) => ({
   ...state,
   data: action.payload,
}));
```