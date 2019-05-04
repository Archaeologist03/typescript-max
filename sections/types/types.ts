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
  let realAge: number;
  realAge = 24;
  // realAge = '24';

  // array
  let hobbies: any[] = ['basket', 'reading'];
  hobbies = [100];
  // hobbies = 100;

  // tuples
  let address: [string, number] = ['Superstreet', 99];
  // let address1: [string, number] = [99, 'Superstreet'];

  // enum
  enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2, // 2
    Red, // 3 -- continue from last (blue) if blue = 50, red would be 51
  }
  let myColor: Color = Color.Green;
  console.log(myColor);

  // any
  let car: any = 'BMW';
  console.log(car);
  car = { brand: 'Some..', series: 3 };
  console.log(car);

  // =================================
  // =================================
  // =================================
  // =================================
  // =================================

  // functions
  function returnMyName(): string {
    return myName;
    // return age;
  }
  console.log(returnMyName());

  // void
  function sayHello(): void {
    console.log('Hello ......doing void stuff');
    // return 'something that is not void'
  }

  // argument types
  function multiply(value1: number, value2: number): number {
    return value1 * value2;
  }
  console.log(multiply(2, 5));
  // console.log(multiply(2, 'Max'));

  // function types
  let myMultiply: (val1: number, val2: number) => number;
  myMultiply = multiply;
  console.log(myMultiply(5, 3));
  // myMultiply = sayHello;
  // myMultiply();

  // objects
  let userData: { name: string; age: number } = {
    name: 'x',
    age: 24,
  };
  // userData = {
  //   a: 'x',
  //   b: 24,
  // };

  // complex object
  let complex: { data: number[]; output: (all: boolean) => number[] } = {
    data: [111, 23, 10],

    output: function(all: boolean): number[] {
      return this.data;
    },
  };
  // complex = {};

  // type alias
  //(type keyword makes this not assignment but type creation)
  type Complex = { data: number[]; output: (all: boolean) => number[] };

  let complex2: Complex = {
    data: [111, 23, 10],

    output: function(all: boolean): number[] {
      return this.data;
    },
  };

  // union types
  let myRealRealAge: number | string = 24;
  myRealRealAge = '27';
  // myRealRealAge = true;

  // check types
  let finalValue = 21;
  if (typeof finalValue === 'number') {
    console.log('Final value is a number');
  }

  // never
  //(doesnt return anything, ever. Not same as void and undefined return)
  function neverReturns(): never {
    throw new Error('an error');
  }

  // nullable types
  //("strictNullChecks": true, in tsConfig does not let to reasign to null. You have to do | null, exepct undefined, it can be reasign to null)
  let canBeNull: number | null = 12;
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
