"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = exports.ComplexNumber = void 0;
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }
    multiply(other) {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}
exports.ComplexNumber = ComplexNumber;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(x, y, width, height) {
        this.topLeft = new Point(x, y);
        this.topRight = new Point(x + width, y);
        this.bottomLeft = new Point(x, y + height);
        this.bottomRight = new Point(x + width, y + height);
    }
    move(dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }
    getArea() {
        const width = this.topRight.getX() - this.topLeft.getX();
        const height = this.bottomLeft.getY() - this.topLeft.getY();
        return width * height;
    }
}
exports.Rectangle = Rectangle;
