// interface NamedPerson {
//   firstName: string;
// }

interface NamedPerson {
  firstName: string;
  // age is optional
  age?: number;
  // if we dont know the name of the key yet
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log('Hello ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'x';
}

// =============================
// =============================
// =============================

// OBJECT + INTERFACE
const person: NamedPerson = {
  firstName: 'Ix',
  someOtherStuff: 'some stuff...',
  greet(lastName: string) {
    console.log(`Hi, i am ${this.firstName} ${lastName}`);
  },
};

// cant pass object literal that has extra(properties that are not in interface, age in namedPerson case) properties directly like this when using interface.

// greet({
//   firstName: 'Ix',
//   age: 24,
// });

// can be used here, because age is set to optional in interface
// greet({ firstName: 'Ix', age: 24 });
changeName(person);
greet(person);
person.greet('anything');

// =============================
// =============================
// =============================

// CLASS implements INTERFACE
class Person implements NamedPerson {
  firstName: string = 'default value';
  lastName: string = 'default value';
  greet(lastName: string) {
    console.log(`Hi, i am ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person();
myPerson.firstName = 'Ixx';
myPerson.lastName = 'any-last-name';
greet(myPerson);
myPerson.greet(myPerson.lastName);

// =============================
// =============================
// =============================

// FUNCTION + INTERFACE
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// =============================
// =============================
// =============================

// INTERFACE INHERITANCE

// Extending interface with other interface
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 24,
  firstName: 'ix',
  greet(lastName: string) {
    console.log('Hello');
  },
};

console.log(oldPerson);
