function findItemMiss(data) {
    var i = 0;
    var arr = [];
    while (i <= 20) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
var arr = [1, 2, 15, 18, 20];
console.log(findItemMiss(arr));
