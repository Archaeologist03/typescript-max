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
const testResults = [2, 5];
testResults.push(3);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(element => {
        console.log(element);
    });
}
printAll(['apples', 'bananas']);
// Generic Types
// (everything up to = is typescripty - setting type)
// (any after = is already written func, we could as well write func body there.)
const echo2 = betterEcho;
console.log(echo2('something'));
// Generic Class
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
