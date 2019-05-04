"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function TSClasses() {
    var Person = /** @class */ (function () {
        function Person(name, username) {
            this.username = username;
            this.type = 'some type';
            this.age = 24;
            this.name = name;
            // public username in constructor is a  shortcut to auto adds it to constructor as is name added.
        }
        Person.prototype.printAge = function () {
            console.log(this.age);
            this.setType('old dude');
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log(this.type);
        };
        return Person;
    }());
    var person = new Person('ilija', 'x');
    console.log(person);
    person.printAge();
    // person.setType('coool stuff'); // wont work with private methods
    // ==========================
    // ==========================
    // Inheritance
    var Ilija = /** @class */ (function (_super) {
        __extends(Ilija, _super);
        function Ilija(username) {
            var _this = _super.call(this, 'Ilija', username) || this;
            _this.age = 33;
            return _this;
            // can access protected but not private from parent class, so age is accessible but type is not.
        }
        return Ilija;
    }(Person));
    var ilija = new Ilija('x');
    console.log(ilija);
    // ==========================
    // ==========================
    // Getters & Setters
    var Plant = /** @class */ (function () {
        function Plant() {
            this._species = 'Default';
        }
        Object.defineProperty(Plant.prototype, "species", {
            get: function () {
                return this._species;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._species = value;
                }
                else {
                    this._species = 'Default';
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log(plant.species);
    plant.species = 'ab';
    console.log(plant.species);
    plant.species = 'Rose';
    console.log(plant.species);
    // ==========================
    // ==========================
    // Static Properties & Methods
    var Helpers = /** @class */ (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.14;
        return Helpers;
    }());
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(5));
    // ==========================
    // ==========================
    // Abstract Classes
    // ( Cannot be instantiated directly. Always(used for) have to be inherited from them)
    // (blueprint for another/child class)
    var Project = /** @class */ (function () {
        function Project() {
            this.projectName = 'Default';
            this.budget = 10;
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = /** @class */ (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    console.log(newProject);
    newProject.changeName('super it project name');
    console.log(newProject);
    // ==========================
    // ==========================
    // Private constructors
    // (singleton class pattern just with extra private keywords)
    // (user when you need only ONE INSTANCE of that class)
    var OnlyOne = /** @class */ (function () {
        function OnlyOne(name) {
            this.name = name;
        }
        OnlyOne.getInstance = function () {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The only one');
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
    // let wrong = new OnlyOne('the only One');
    var right = OnlyOne.getInstance();
    console.log(right.name);
    // right.name = ' something else';
}
