"use strict";
exports.__esModule = true;
var employManager_1 = require("./employManager");
var employ_1 = require("./employ");
var employee1 = new employ_1.Employee('tran', "Hung", "26/1", "ha noi", "staff");
var employee2 = new employ_1.Employee('Mai', "Huong", "10/9", "nam dinh", "staff");
var employee3 = new employ_1.Employee('Pham', "Quyet", "1/12", "nam dinh", "manager");
var employee4 = new employ_1.Employee('pham', "Trung", "6/5", "ha tay", "leader");
var manager = new employManager_1.EmployeeManager();
manager.add(employee1);
manager.add(employee2);
manager.add(employee3);
manager.add(employee4);
console.table(manager.display());
// manager.Delete("tran","hung","26/1")
console.table(manager.display());
