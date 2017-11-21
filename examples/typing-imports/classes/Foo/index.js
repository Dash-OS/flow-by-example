/* @flow */

import type { $Foo } from '../../types';

class Foo implements $Foo {
  type = 'foo';
  foo = () => 1;
  baz = () => 'no';
}

export default Foo;
