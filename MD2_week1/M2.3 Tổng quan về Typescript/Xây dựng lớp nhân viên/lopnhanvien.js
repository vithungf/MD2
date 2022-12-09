var Staff = /** @class */ (function () {
    function Staff(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Staff;
}());
var staff = new Staff('quyet', 26, 'quyetpham@gmail.com');
console.log(staff.age);
console.log(staff.getEmail());
console.log(staff.getName());
