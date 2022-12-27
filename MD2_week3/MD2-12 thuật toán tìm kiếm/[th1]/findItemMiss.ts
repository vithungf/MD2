
function findItemMiss(data:number[]):number[]{
    let i :number = 0;
    let arr: number[]= [];
    while (i<=20){
        if (data.indexOf(i)==-1){
            arr.push(i);
        }
        i++;
    }
    return arr
}
let arr = [1,2,15,18,20];
console.log( findItemMiss(arr))