/* @flow */

/*
  To differentiate the classes name from the object key it will belong to
  we are exporting each as lowercase.

  This results in our exports being:

  {
    foo: Foo,
    bar: Bar
  }
*/
export { default as foo } from './Foo';
export { default as bar } from './Bar';
