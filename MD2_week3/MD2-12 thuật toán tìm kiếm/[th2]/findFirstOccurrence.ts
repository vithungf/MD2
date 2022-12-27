function findFirstOccurrence(number: number[],
                             target: number): number {
    let low: number = 0;
    let high: number = number.length - 1;
    let result: number = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (number[mid] == target) {
            result = mid;
            high = mid - 1;
        } else if (number[mid] > target) {
            high = mid - 1;

        } else{
            low = mid + 1;
        }
    }
    return result;
}

let data: number[ ] = [1, 3, 4, 5, 6, 55, 434];
let target: number = 5;
let index: number = findFirstOccurrence(data, target);

if (index == -1) {
    console.log(`phan tu ${target} ko ton tai trong mang`)
} else {
    console.log(`phan tu ${target} xuat hien dau tien tai vi tri ${index}`);  }