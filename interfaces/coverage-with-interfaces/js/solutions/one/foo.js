/* @flow */

// This will work - adding the type parameter in this case to the function
// will give Flow enough information to type things properly.

export default class Foo<S> {
  state: S;
  constructor(defstate: S) {
    this.state = defstate;
  }
  setState: (state: $Shape<S>) => void = (state: $Shape<S>) => {
    this.state = {
      ...this.state,
      ...state,
    };
  };
}
