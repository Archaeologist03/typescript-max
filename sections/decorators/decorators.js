"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
// @ sign makes function(logged) a decorator
let Person = class Person {
    constructor() {
        console.log('hi');
    }
};
Person = __decorate([
    logged
], Person);
//========================
// Factory
function logging(value) {
    return value ? logged : null;
}
let Car = class Car {
};
Car = __decorate([
    logging(true)
], Car);
//========================
// Advanced decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// multiple decorators
let Plant = class Plant {
    // multiple decorators
    constructor() {
        this.name = 'green plant';
    }
};
Plant = __decorate([
    logging(true),
    printable
], Plant);
const plant = new Plant();
plant.print();
//========================
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Property Decorator
function overritable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
class Project {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overritable(true)
], Project.prototype, "projectName", void 0);
__decorate([
    editable(true)
], Project.prototype, "calcBudget", null);
const project = new Project('SUper project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
//========================
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('target ', target);
    console.log('method name ', methodName);
    console.log('param index ', paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(100000);
        }
        else {
            console.log(222);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course('Souper course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anytihng', false);
