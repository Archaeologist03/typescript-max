"use strict";
// interface NamedPerson {
//   firstName: string;
// }
function greet(person) {
    console.log('Hello ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'x';
}
// =============================
// =============================
// =============================
// OBJECT + INTERFACE
var person = {
    firstName: 'Ix',
    someOtherStuff: 'some stuff...',
    greet: function (lastName) {
        console.log("Hi, i am " + this.firstName + " " + lastName);
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
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'default value';
        this.lastName = 'default value';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, i am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Ixx';
myPerson.lastName = 'any-last-name';
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 24,
    firstName: 'ix',
    greet: function (lastName) {
        console.log('Hello');
    },
};
console.log(oldPerson);
