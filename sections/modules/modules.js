"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle = __importStar(require("./math/circle"));
const rectangle_1 = __importDefault(require("./math/rectangle"));
console.log(Circle.PI);
console.log(Circle.calculcateCirumference(3));
console.log(rectangle_1.default(20, 50));
