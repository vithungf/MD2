import {Circle} from "./Circle";

class Cylinder extends Circle{
    height :number

    constructor(color: string, filled: boolean, radius: number, height: number) {
        super(color, filled, radius);
        this.height = height;
    }
    getCylindricalVolume():number{
        return super.getArea()*this.height
    }
}