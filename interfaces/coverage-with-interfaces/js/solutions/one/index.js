/* @flow */

import type { $FooState } from './types';

import Foo from './foo';

const foo: Foo<$FooState> = new Foo({ foo: 'default' });

// Works!
foo.setState({ bar: 1 });
// Works!
foo.setState({ foo: 'something else', bar: 2 });

// $ExpectError
/*
  string
  This type is incompatible with
  number
*/
foo.setState({ bar: 'not a number!' });
