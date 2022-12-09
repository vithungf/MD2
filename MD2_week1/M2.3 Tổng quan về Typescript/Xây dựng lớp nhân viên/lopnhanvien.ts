class Staff {
    public name: string;
    public age: number;
    public email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }getEmail(): string {
        return this.email;
    }
    setName(name: string) {
        this.name = name;
    }
    setAge(age: number) {
        this.age = age;
    }
    setEmail(email: string) {
        this.email = email;
    }
}
let staff = new Staff('quyet',26,'quyetpham@gmail.com');
console.log(staff.getName())
console.log(staff.age)
console.log(staff.getEmail())
