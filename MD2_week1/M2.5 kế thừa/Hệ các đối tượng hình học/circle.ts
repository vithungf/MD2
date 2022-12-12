import{Shape} from "./shape"

export class Circle extends Shape {
    private radius: number = 1.0;

    constructor(radius: number,color: string,filled : boolean) {

        super(color,filled);
        this.radius = radius;
    }
    public getRadius(): number {
        return this.radius;
    }
    public setRadius(radius: number): void {
        this.radius = radius;
    }
    public getArea(): number {
        return this.radius*this.radius*Math.PI;
    }
    public getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
    public toString(): string {
        return " a Circle with radius " + this.radius + " which is a subclass of " + super.toString;

    }
}