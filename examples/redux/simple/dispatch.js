/* @flow */
import { reduceAction } from './reducers';

import { createActionOne, createActionTwo } from './actions';

const actionone = createActionOne({ one: 1 });

const actiontwo = createActionTwo({ two: 2 });

const state = {
  one: 0,
  two: 0,
};

const stateone = reduceAction(state, actionone);

const statetwo = reduceAction(state, actiontwo);

// (state: { one: 1, two: 2 });

// state = reduceAction(state, { foo: 'bar', one: 1 });
