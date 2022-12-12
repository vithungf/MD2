import user from "./user";

class Student extends user{

    public group : string

    public GPA: number

    public code : number

    constructor(name: string,
                email: string,
                password: string,
                address: string,
                group: string,
                GPA: number,
                code: number){
        super(name, email, password, address,);
    }
    getGroup(){
        return this.group;
    }
    getCode(){
        return this.code;
    }
    getGPA(){
        return this.GPA;
    }

}
export default Student