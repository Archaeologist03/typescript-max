// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('xx'));
console.log(echo(24));
console.log(echo({ name: 'xx', age: 24 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('xx'));
console.log(betterEcho<number>(24));
console.log(betterEcho({ name: 'xx', age: 24 }));

// Built-in Generics
const testResults: Array<number> = [2, 5];
testResults.push(3);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => {
    console.log(element);
  });
}
printAll<string>(['apples', 'bananas']);

// Generic Types

// (everything up to = is typescripty - setting type)
// (any after = is already written func, we could as well write func body there.)
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('something'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue!: T;
  multiplyValue!: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
