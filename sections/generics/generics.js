"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('xx'));
console.log(echo(24));
console.log(echo({ name: 'xx', age: 24 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('xx'));
console.log(betterEcho(24));
console.log(betterEcho({ name: 'xx', age: 24 }));
// Built-in Generics
var testResults = [2, 5];
testResults.push(3);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) {
        console.log(element);
    });
}
printAll(['apples', 'bananas']);
// Generic Types
// (everything up to = is typescripty - setting type)
// (any after = is already written func, we could as well write func body there.)
var echo2 = betterEcho;
console.log(echo2('something'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
