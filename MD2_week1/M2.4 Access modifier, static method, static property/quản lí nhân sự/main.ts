import {EmployeeManager} from "./employManager";
import {Employee} from "./employ"

let employee1 = new Employee('tran',"Hung","26/1","ha noi","staff")
let employee2 = new Employee('Mai',"Huong","10/9","nam dinh","staff")
let employee3 = new Employee('Pham',"Quyet","1/12","nam dinh","manager")
let employee4 = new Employee('pham',"Trung","6/5","ha tay","leader")

let manager = new EmployeeManager()
manager.add(employee1)
manager.add(employee2)
manager.add(employee3)
manager.add(employee4)

console.table(manager.display())


// manager.Delete("tran","hung","26/1")
console.table(manager.display())
