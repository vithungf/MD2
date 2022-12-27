import {Employee} from "../../../MD2_week1/M2.4 Access modifier, static method, static property/quản lí nhân sự/employ";

export class EmployeeSalary{
    month: string;
    money : number;
    next : any;

    constructor ( month :string, money :number, next:any){

        this.month = month;
        this.money = money;
        this.next = next;
    }

    readData ():[string, number]{
        return [this.month, this.money];
    }

}