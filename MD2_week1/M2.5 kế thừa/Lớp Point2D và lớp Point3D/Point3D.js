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
exports.__esModule = true;
exports.Point3D = void 0;
var Point2D_1 = require("./Point2D");
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this._z = z;
        return _this;
    }
    Object.defineProperty(Point3D.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point3D.prototype, "xyz", {
        get: function () {
            return { x: this.x, y: this.y, z: this.z };
        },
        enumerable: false,
        configurable: true
    });
    Point3D.prototype.setXYZ = function (newX, newY, newZ) {
        this.x = newX;
        this.y = newY;
        this.z = newZ;
    };
    return Point3D;
}(Point2D_1.Point2D));
exports.Point3D = Point3D;
var threeDPoint = new Point3D(1, 2, 3);
console.log(threeDPoint.xyz);
threeDPoint.setXYZ(4, 5, 6);
console.log(threeDPoint.xyz);
