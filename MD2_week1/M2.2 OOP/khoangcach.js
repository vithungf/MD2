class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    displayName = 'Point';

    distance(b) {
        const dx = this.x - b.x;
        const dy = this.y - b.y;

        return Math.hypot(dx, dy);

    }
}
let p1 = new point(9,9);
let p2 = new point(10,10);

console.log(p1.displayName);
console.log(p2.distance(p1));
