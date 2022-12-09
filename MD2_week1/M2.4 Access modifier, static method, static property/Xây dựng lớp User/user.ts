export class User {
    private name: string;
    private email: string;
    private role: int;

    constructor(name: string, email: string, role: int) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getRole(): int {
        return this.role;
    }

    setRole(value: int) {
        this.role = value;

    }
    getInfo(): object {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        }
    }

    isAdmin(): string {
        if (this.role === 0) {
            return "admin"
        } else if (this.role === 1){
            return "user"
        } else if (this.role === 2){
            return "public"
        } else {
            return "role is not defined"
        }
    }
}


enum int {admin, user, public}

let user1 = new User("hung", "hug@gamil.com", 0)
let user2 = new User("quyet", "quyet@gamil.com",1)
let user3 = new User("hoang", "hoang@gamil.com",2)

console.log(user1.getInfo())
console.log(user2.getInfo())
console.log(user3.getInfo())