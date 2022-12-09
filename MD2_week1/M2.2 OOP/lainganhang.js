class Customer {
    constructor(name, money,period) {
        this.name = name;
        this.money = money;
        this.period = period;
    }

    getTotalInterest() {
        if (this.period === 6){
            return this.money*(75/1000)/12*this.period;
        }else if (this.period === 12){
            return this.money*(80/1000)/12*this.period;
        }else if (this.period === 24){
            return this.money*(85/1000)/12*this.period;
        }else if (this.period > 24){
            return this.money*(100/1000)/12*this.period;
        }

    }
    getTotalMoney() {
        return this.money + this.getTotalInterest();
    }
}
let customer = new Customer('hung',20000000,24);
console.log(customer.getTotalInterest());
console.log(customer.getTotalMoney());

