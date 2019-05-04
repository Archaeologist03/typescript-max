"use strict";
function basicTypes() {
    // Strings
    var myName = 'Max';
    // myName = 22;
    // Number
    var age = 24;
    // age = '24';
    // boolean
    var hasHobbies = true;
    // hasHobbies = 1;
    // assign types
    var realAge;
    realAge = 24;
    // realAge = '24';
    // array
    var hobbies = ['basket', 'reading'];
    hobbies = [100];
    // hobbies = 100;
    // tuples
    var address = ['Superstreet', 99];
    // let address1: [string, number] = [99, 'Superstreet'];
    // enum
    var Color;
    (function (Color) {
        Color[Color["Gray"] = 0] = "Gray";
        Color[Color["Green"] = 100] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Red"] = 3] = "Red";
    })(Color || (Color = {}));
    var myColor = Color.Green;
    console.log(myColor);
    // any
    var car = 'BMW';
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
    var myMultiply;
    myMultiply = multiply;
    console.log(myMultiply(5, 3));
    // myMultiply = sayHello;
    // myMultiply();
    // objects
    var userData = {
        name: 'x',
        age: 24,
    };
    // userData = {
    //   a: 'x',
    //   b: 24,
    // };
    // complex object
    var complex = {
        data: [111, 23, 10],
        output: function (all) {
            return this.data;
        },
    };
    var complex2 = {
        data: [111, 23, 10],
        output: function (all) {
            return this.data;
        },
    };
    // union types
    var myRealRealAge = 24;
    myRealRealAge = '27';
    // myRealRealAge = true;
    // check types
    var finalValue = 21;
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
    var canBeNull = 12;
    canBeNull = null;
    var canAlsoBeNull;
    canAlsoBeNull = null;
    var canThisBeAny = null;
    canThisBeAny = 11;
    // =================================
    // =================================
    // =================================
    // =================================
    // =================================
}
basicTypes();
