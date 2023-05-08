class ComplexNumber {
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    subtract(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }

    multiply(other: ComplexNumber): ComplexNumber {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    toString(): string {
        return `${this.real} + ${this.imaginary}i`;
    }
}

class Point {
    constructor(private x: number, private y: number) {}

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class Rectangle {
    private topLeft: Point;
    private topRight: Point;
    private bottomLeft: Point;
    private bottomRight: Point;

    constructor(x: number, y: number, width: number, height: number) {
        this.topLeft = new Point(x, y);
        this.topRight = new Point(x + width, y);
        this.bottomLeft = new Point(x, y + height);
        this.bottomRight = new Point(x + width, y + height);
    }

    move(dx: number, dy: number): void {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getArea(): number {
        const width = this.topRight.getX() - this.topLeft.getX();
        const height = this.bottomLeft.getY() - this.topLeft.getY();
        return width * height;
    }
}

export { ComplexNumber, Point, Rectangle };
