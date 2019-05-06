"use strict";
function interfaces() {
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
    const person = {
        firstName: 'Ix',
        someOtherStuff: 'some stuff...',
        greet(lastName) {
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
    class Person {
        constructor() {
            this.firstName = 'default value';
            this.lastName = 'default value';
        }
        greet(lastName) {
            console.log(`Hi, i am ${this.firstName} ${lastName}`);
        }
    }
    const myPerson = new Person();
    myPerson.firstName = 'Ixx';
    myPerson.lastName = 'any-last-name';
    greet(myPerson);
    myPerson.greet(myPerson.lastName);
    let myDoubleFunction;
    myDoubleFunction = function (value1, value2) {
        return (value1 + value2) * 2;
    };
    console.log(myDoubleFunction(10, 20));
    const oldPerson = {
        age: 24,
        firstName: 'ix',
        greet(lastName) {
            console.log('Hello');
        },
    };
    console.log(oldPerson);
}
