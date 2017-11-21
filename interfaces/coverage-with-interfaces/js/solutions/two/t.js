/* @flow */

interface One<A: {}> {
  +foo: A;
}

const a: One<{ one: 2, two?: string }> = {
  foo: { one: 2 },
};

a.foo.two = 'hi';

console.log(a);
