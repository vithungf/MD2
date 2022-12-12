
export class Circle {
    private color: string = "green";
    private filled: boolean = true;
    private radius: number = 1.0;


    constructor( color: string, filled: boolean,radius: number,) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
}