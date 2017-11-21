/* @flow */

type One = {|
  foo: string,
  bar: boolean | string,
|};

type Two = {
  foo: string,
  bar: boolean,
};

function convertObjectBugged(obj: One): Two {
  type OneWithoutBar = $Diff<One, { bar: any }>;
  const res = {
    ...(obj: OneWithoutBar),
    bar: true,
  };
  return res;
}

convertObjectBugged({ foo: 'hi', bar: 'hi' });
