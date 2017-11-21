/* @flow */

/*
  In this example we will look at importing and working with the type of
  imports you have in your project.

  This can be a challenge at first due to the generally dynamic nature
  of your export types.  However, once done your type checking will be
  significantly more sound.
*/

import type {
  // Union of export names
  ClassNames,
  // All of our exports Classes (Class<Instance>)
  ClassTypes,
  // Uses $ObjMap
  InstanceTypes,
  // interface for Foo instance
  $Foo,
  // interface for Bar instance
  $Bar,
  // common properties/methods on all exports
  $Common,
} from './types';

import * as Classes from './classes';

function getInstance(name: ClassNames) {
  if (!Classes[name]) {
    return;
  }

  const C = Classes[name];

  // $Works (C is a Class)
  (C: Class<*>);

  // $Works
  (C: ClassTypes);

  // $Works
  (C: Class<Classes.foo | Classes.bar>);

  const instance = new Classes[name]();

  // $Works
  (instance: InstanceTypes);

  // $Works (Same as above)
  (instance: Classes.foo | Classes.bar);

  // $Works (Similar to above)
  (instance: $Foo | $Bar);

  // $Works (both Foo and Bar have method baz() returning 'no')
  (instance: $Common);

  /*
    $ExpectError
      property `bar`
      Property not found in
      Foo

    NOTE: We need to do more refinement before Flow knows that this
          method is available.
  */
  instance.bar();

  /*
    NOTE: This works because all of our classes implement the baz
          method via the $Common interface.
  */
  const no = instance.baz();

  /*
    $ExpectError
      string literal `no`
      Expected string literal `yes`, got `no` instead
      string literal `yes`
  */
  (no: 'yes');

  // $Works
  (no: 'no');

  if (instance instanceof Classes.bar) {
    // $Works
    (instance: Classes.bar);
    instance.bar();
  } else {
    // $Works -- For now! Adding more exports will break this :(
    // be specific!
    (instance: Classes.foo);
    instance.foo();
  }

  // We can also refine using our type property since it is defined
  // on our interface properly.

  if (instance.type === 'foo') {
    // $Works
    (instance: Classes.foo);
    // $Works
    (instance.foo(): 1);
  }
}

// $Works
getInstance('foo');

/*
  $ExpectError
    property `Foo`
    Property not found in
    import typeof * as Classes
*/
getInstance('Foo');
