function logged(constructorFn: Function) {
  console.log(constructorFn);
}

// @ sign makes function(logged) a decorator
@logged
class Person {
  constructor() {
    console.log('hi');
  }
}

//========================

// Factory
function logging(value: boolean): any {
  return value ? logged : null;
}

@logging(true)
class Car {}

//========================

// Advanced decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

// multiple decorators
@logging(true)
@printable
class Plant {
  name = 'green plant';
}

const plant = new Plant();
(<any>plant).print();

//========================

// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.writable = value;
  };
}

// Property Decorator
function overritable(value: boolean): any {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
}

class Project {
  @overritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(true)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project('SUper project');
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
};
project.calcBudget();

//========================

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('target ', target);
  console.log('method name ', methodName);
  console.log('param index ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(100000);
    } else {
      console.log(222);
    }
  }
}

const course = new Course('Souper course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anytihng', false);
