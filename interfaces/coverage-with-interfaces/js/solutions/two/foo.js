/* @flow */

type MyState = {
  foo: string,
  bar?: number,
};

type MyStateFn = <S>(state: $Shape<S>) => void;

class MyClass<A, S: A> {
  state: S;
  constructor(defstate: S) {
    this.state = defstate;
  }
  setState = (state: $Shape<S>) => {
    Object.assign(this.state, state);
  };
}

// works - foo is required or error like expected
const inst: MyClass<MyState, MyState> = new MyClass({ foo: 'default' });

const s = inst.state;

// Works 2 must be number like expected
inst.setState({ bar: 2 });

// Error -- bar is a string so it fails
inst.setState({ foo: 'ok', bar: 2 });
