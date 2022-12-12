import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z:number

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }

    get xyz():object {
        return {x: this.x, y: this.y, z: this.z }
    }

    setXYZ(newX:number, newY: number,newZ):void{
        this.x = newX
        this.y = newY
        this.z = newZ
    }
}

let threeDPoint = new Point3D(1,2,3)
console.log(threeDPoint.xyz)
threeDPoint.setXYZ(4,5,6)
console.log(threeDPoint.xyz)
