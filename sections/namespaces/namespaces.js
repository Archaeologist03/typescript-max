"use strict";
var CircleMath = MyMath.Circle;
function namespaces() {
    // IMPORTING NAMESPACES
    /// <reference path="circleMath.ts"/>
    /// <reference path="rectangleMath.ts"/>
    var PI = 2.22;
    console.log(MyMath.calculateRectangle(10, 20));
    console.log(CircleMath.calculateCircumference(3));
    console.log(PI);
}
