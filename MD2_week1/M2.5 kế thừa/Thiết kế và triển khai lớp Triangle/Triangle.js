"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, name, side1, side2, side3) {
        var _this = _super.call(this, color, name) || this;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "side1", {
        get: function () {
            return this._side1;
        },
        set: function (value) {
            this._side1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side2", {
        get: function () {
            return this._side2;
        },
        set: function (value) {
            this._side2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side3", {
        get: function () {
            return this._side3;
        },
        set: function (value) {
            this._side3 = value;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.checkingTriangle = function () {
        return this.side1 + this._side2 > this._side3 &&
            this.side1 + this._side3 > this._side2 &&
            this.side3 + this._side2 > this._side1;
    };
    Triangle.prototype.getArea = function () {
        if (this.checkingTriangle) {
            return this._side1 + this._side2 + this._side3;
        }
        else {
            return console.log("this is not the Triangle");
        }
    };
    Triangle.prototype.getPerimeter = function () {
        if (this.checkingTriangle) {
            var S = this.getArea() / 2;
            return Math.sqrt(S * (S - this.side1) * (S - this.side2) * (S - this.side3));
        }
        else {
            return console.log("this is not the Triangle");
        }
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
var testing = new Triangle("red", "triangle", 3, 4, 5);
console.log(testing.getPerimeter());
console.log(testing.getArea());
