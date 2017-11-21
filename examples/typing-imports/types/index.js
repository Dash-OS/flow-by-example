/* @flow */

/*
  import typeof will do the following:
  type Classes = {
    [importName: string]: Class<ExportedClass>
  }
*/
import typeof * as Classes from '../classes';

/*
  Get the Instance of the Class:
  Class<ExportedClass> => ExportedClass
*/
type ExtractInstanceType = <V>(Class<V>) => V;

/*
  Takes the Classes type shown above and returns a
  union of Class<ExportedClass>

  In our example it results in:

  Class<Foo> | Class<Bar>
*/
export type ClassTypes = $Values<Classes>;

/*
  Now we want to iterate the given object and extract the instance
  of each so that we can use them as needed.

  This will result in changing the ClassTypes to:

  Foo | Bar
*/
export type InstanceTypes = $Values<$ObjMap<Classes, ExtractInstanceType>>;

/*
  This will simply take the keys of the Classes object.  It will result in
  a union resembling the following:

  'foo' | 'bar'
*/
export type ClassNames = $Keys<Classes>;

/*
  interfaces can be extended to represent common methods and properties
  that may be shared among multiple interfaces.
*/
export interface $Common {
  baz: () => 'no';
}

/*
  While these are not required, it is always safe to implement interfaces to
  double-check your typing.  They can also help to provide a "bigger picture"
  of your entire app from a single location.
*/
export interface $Foo extends $Common {
  type: 'foo';
  foo: () => 1;
}

export interface $Bar extends $Common {
  type: 'bar';
  bar: () => 2;
}

interface ABC<A, B, C> {
  foo: () => ABC<A, B, C>;
}

export interface Sup<P, S, Sub = void> {
  self: Sup<P, S, Sub>;
}

export interface Sub<P, S> extends Sup<P, S> {
  foo: () => Sub<P, S, Sub<P, S>>;
}
