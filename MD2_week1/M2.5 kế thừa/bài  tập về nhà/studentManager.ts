import Student from "./student";


class StudentManager{

    student:Student [] =  [];

    constructor(){
        }
        display(){
        return this.student
    }

    add(student:Student):void {
        this.student.push(student);
    }

    remove(code: number):void {
        for (let i = 0; i < this.student.length; i){

            if (this.student[i].code == code){
                this.student.splice(i, 1);
            }
        }
    }
    edit(code: number):void {
        for (let i = 0; i < this.student.length; i++){

            if (this.student[i].code == code){
                this.student[i].name = this.student[i].name + " edited";
            }
        }
    }

}