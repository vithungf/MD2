import {Shape} from "./Shape";

export class Triangle extends Shape{
    private _side1:number
    private _side2:number
    private _side3:number

    constructor(color: string, name: string, side1: number, side2: number, side3: number) {
        super(color, name);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }

    checkingTriangle():boolean{
        return this.side1 + this._side2 > this._side3 &&
            this.side1 + this._side3 > this._side2 &&
            this.side3 + this._side2 > this._side1;
    }

    getArea():any{
        if (this.checkingTriangle){
            return this._side1 + this._side2 + this._side3
        } else {
            return console.log("this is not the Triangle")
        }
    }

    getPerimeter():any{
        if (this.checkingTriangle){
            let S = this.getArea()/2;
             return Math.sqrt(S*(S-this.side1)*(S-this.side2)*(S-this.side3))
        } else {
            return console.log("this is not the Triangle")
        }
    }


}

let testing = new Triangle("red","triangle",3,4,5)

console.log(testing.getPerimeter())
console.log(testing.getArea())