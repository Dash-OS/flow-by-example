/* @flow */

interface Test<+U> {
  +foo: U;
  grab: () => U | Array<U>;
}

type TestType<+U> = {
  +foo: U,
  +grab: () => U,
};

type TestTypeTwo<U> = {
  foo: U,
  grab: () => U,
};

const one: TestType<'hi' | 'hey'> = {
  foo: 'hi',
  grab: () => 'hey',
};

const two: TestTypeTwo<'hi' | 'hey'> = {
  foo: 'hi',
  grab: () => one.foo,
};
