"use strict";
function basicTypes() {
    // Strings
    let myName = 'Max';
    // myName = 22;
    // Number
    let age = 24;
    // age = '24';
    // boolean
    let hasHobbies = true;
    // hasHobbies = 1;
    // assign types
    let realAge;
    realAge = 24;
    // realAge = '24';
    // array
    let hobbies = ['basket', 'reading'];
    hobbies = [100];
    // hobbies = 100;
    // tuples
    let address = ['Superstreet', 99];
    // let address1: [string, number] = [99, 'Superstreet'];
    // enum
    let Color;
    (function (Color) {
        Color[Color["Gray"] = 0] = "Gray";
        Color[Color["Green"] = 100] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Red"] = 3] = "Red";
    })(Color || (Color = {}));
    let myColor = Color.Green;
    console.log(myColor);
    // any
    let car = 'BMW';
    console.log(car);
    car = { brand: 'Some..', series: 3 };
    console.log(car);
    // =================================
    // =================================
    // =================================
    // =================================
    // =================================
    // functions
    function returnMyName() {
        return myName;
        // return age;
    }
    console.log(returnMyName());
    // void
    function sayHello() {
        console.log('Hello ......doing void stuff');
        // return 'something that is not void'
    }
    // argument types
    function multiply(value1, value2) {
        return value1 * value2;
    }
    console.log(multiply(2, 5));
    // console.log(multiply(2, 'Max'));
    // function types
    let myMultiply;
    myMultiply = multiply;
    console.log(myMultiply(5, 3));
    // myMultiply = sayHello;
    // myMultiply();
    // objects
    let userData = {
        name: 'x',
        age: 24,
    };
    // userData = {
    //   a: 'x',
    //   b: 24,
    // };
    // complex object
    let complex = {
        data: [111, 23, 10],
        output: function (all) {
            return this.data;
        },
    };
    let complex2 = {
        data: [111, 23, 10],
        output: function (all) {
            return this.data;
        },
    };
    // union types
    let myRealRealAge = 24;
    myRealRealAge = '27';
    // myRealRealAge = true;
    // check types
    let finalValue = 21;
    if (typeof finalValue === 'number') {
        console.log('Final value is a number');
    }
    // never
    //(doesnt return anything, ever. Not same as void and undefined return)
    function neverReturns() {
        throw new Error('an error');
    }
    // nullable types
    //("strictNullChecks": true, in tsConfig does not let to reasign to null. You have to do | null, exepct undefined, it can be reasign to null)
    let canBeNull = 12;
    canBeNull = null;
    let canAlsoBeNull;
    canAlsoBeNull = null;
    let canThisBeAny = null;
    canThisBeAny = 11;
    // =================================
    // =================================
    // =================================
    // =================================
    // =================================
}
basicTypes();
