import{Calculator}  from "./app";

describe("add function", () => {
    test("add two number", () => {

        const number1 = 1;
        const number2 = 2;

        const result = 3;
        const failResult = 4;

        expect(Calculator.add(number1, number2)).toBe(result);
        expect(Calculator.add(number1, number2)).not.toBe(failResult);
    });
});