/* @flow */

export opaque type $TYPE_ONE = 'TYPE_ONE';

export const TYPE_ONE: $TYPE_ONE = 'TYPE_ONE';

export opaque type $TYPE_TWO = 'TYPE_TWO';

export const TYPE_TWO: $TYPE_TWO = 'TYPE_TWO';

export type $ActionOne = {|
  +type: $TYPE_ONE,
  +one: number,
|};

export type $ActionTwo = {|
  +type: $TYPE_TWO,
  +two: number,
|};

export type $Actions = $ActionOne | $ActionTwo;
