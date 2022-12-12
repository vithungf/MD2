"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2D.prototype, "xy", {
        get: function () {
            return { x: this.x, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    Point2D.prototype.setXY = function (newX, newY) {
        this.x = newX;
        this.y = newY;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
