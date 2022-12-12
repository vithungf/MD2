export class Shape {
    private color: string = "green";
    private filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean) {
        this.filled = filled;

    }
    public toString(): string {
        return "a shape with color"
       + this.getColor()
        +  ' and'
        +(this.filled ? "filled" :'not filled');
    }

}
