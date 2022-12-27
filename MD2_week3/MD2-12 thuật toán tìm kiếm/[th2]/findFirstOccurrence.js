function findFirstOccurrence(number, target) {
    var low = 0;
    var high = number.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (number[mid] == target) {
            result = mid;
            high = mid - 1;
        }
        else if (number[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}
var data = [1, 3, 4, 5, 6, 55, 434];
var target = 5;
var index = findFirstOccurrence(data, target);
if (index == -1) {
    console.log("phan tu ".concat(target, " xuat hien dau tien tai vi tri ").concat(index));
}
else {
    console.log("phan tu ".concat(target, " ko ton tai trong mang"));
}
