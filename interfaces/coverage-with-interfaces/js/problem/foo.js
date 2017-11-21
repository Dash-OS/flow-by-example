/* @flow */

export default class Foo<S> {
  state: S;
  constructor(defstate: S) {
    this.state = defstate;
  }
  setState = (state: $Shape<S>) => {
    this.state = {
      ...this.state,
      ...state,
    };
  };
}
