/* @flow */
import type {
  $TYPE_ONE,
  $TYPE_TWO,
  $Actions,
  $ActionOne,
  $ActionTwo,
} from './types';

import { TYPE_ONE, TYPE_TWO } from './types';

(TYPE_ONE: *);
(TYPE_TWO: *);

type StateShape = {
  +one: number,
  +two: number,
};

export function reduceAction<S: StateShape, A: $ActionOne | $ActionTwo>(
  state: S,
  action: A,
): S {
  (action: *);
  switch (action.type) {
    case TYPE_ONE: {
      if (typeof action.one === 'number') {
        (action: $ActionOne);
        return {
          ...state,
          one: action.one + state.one,
        };
      }
      break;
    }
    case TYPE_TWO: {
      (action: *);
      return {
        ...state,
        two: state.two + typeof action.two === 'number' ? action.two : 2,
      };
    }
    default: {
      (action: *);
      return state;
    }
  }
}
