/* @flow */
import type {
  $TYPE_ONE,
  $TYPE_TWO,
  $Actions,
  $ActionOne,
  $ActionTwo,
} from './types';
import { TYPE_ONE, TYPE_TWO } from './types';

export function createActionOne(data: $Shape<{ ...$ActionOne }>): $ActionOne {
  return {
    type: TYPE_ONE,
    one: typeof data.one === 'number' ? data.one : 1,
  };
}

export function createActionTwo(data: $Shape<{ ...$ActionTwo }>): $ActionTwo {
  return {
    type: TYPE_TWO,
    two: typeof data.two === 'number' ? data.two : 2,
  };
}
