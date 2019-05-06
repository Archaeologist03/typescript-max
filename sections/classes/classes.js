"use strict";
function TSClasses() {
    class Person {
        constructor(name, username) {
            this.username = username;
            this.type = 'some type';
            this.age = 24;
            this.name = name;
            // public username in constructor is a  shortcut to auto adds it to constructor as is name added.
        }
        printAge() {
            console.log(this.age);
            this.setType('old dude');
        }
        setType(type) {
            this.type = type;
            console.log(this.type);
        }
    }
    const person = new Person('ilija', 'x');
    console.log(person);
    person.printAge();
    // person.setType('coool stuff'); // wont work with private methods
    // ==========================
    // ==========================
    // Inheritance
    class Ilija extends Person {
        constructor(username) {
            super('Ilija', username);
            this.age = 33;
            // can access protected but not private from parent class, so age is accessible but type is not.
        }
    }
    const ilija = new Ilija('x');
    console.log(ilija);
    // ==========================
    // ==========================
    // Getters & Setters
    class Plant {
        constructor() {
            this._species = 'Default';
        }
        get species() {
            return this._species;
        }
        set species(value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        }
    }
    const plant = new Plant();
    console.log(plant.species);
    plant.species = 'ab';
    console.log(plant.species);
    plant.species = 'Rose';
    console.log(plant.species);
    // ==========================
    // ==========================
    // Static Properties & Methods
    class Helpers {
        static calcCircumference(diameter) {
            return this.PI * diameter;
        }
    }
    Helpers.PI = 3.14;
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(5));
    // ==========================
    // ==========================
    // Abstract Classes
    // ( Cannot be instantiated directly. Always(used for) have to be inherited from them)
    // (blueprint for another/child class)
    class Project {
        constructor() {
            this.projectName = 'Default';
            this.budget = 10;
        }
        calcBudget() {
            return this.budget * 2;
        }
    }
    class ITProject extends Project {
        changeName(name) {
            this.projectName = name;
        }
    }
    const newProject = new ITProject();
    console.log(newProject);
    newProject.changeName('super it project name');
    console.log(newProject);
    // ==========================
    // ==========================
    // Private constructors
    // (singleton class pattern just with extra private keywords)
    // (user when you need only ONE INSTANCE of that class)
    class OnlyOne {
        constructor(name) {
            this.name = name;
        }
        static getInstance() {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The only one');
            }
            return OnlyOne.instance;
        }
    }
    // let wrong = new OnlyOne('the only One');
    let right = OnlyOne.getInstance();
    console.log(right.name);
    // right.name = ' something else';
}
