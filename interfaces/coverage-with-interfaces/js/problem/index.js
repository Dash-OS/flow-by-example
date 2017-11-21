/* @flow */

import type { $FooState } from './types';

import Foo from './foo';

const foo: Foo<$FooState> = new Foo({ foo: 'default' });

// $ExpectErrors
/*
  property `bar` of object literal
  Property cannot be assigned on
  S

  property `foo` of object literal
  Property cannot be assigned on
  S
*/
foo.setState({ foo: 'hello, world', bar: 1 });
