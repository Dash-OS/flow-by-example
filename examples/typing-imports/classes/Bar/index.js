/* @flow */

import type { $Bar } from '../../types';

class Bar implements $Bar {
  type = 'bar';
  bar = () => 2;
  baz = () => 'no';
}

export default Bar;
