const isOdd = val => val % 2 !== 0;

function someRecursive(arr, fun){
    if(arr.length === 0) return false;
    if(fun(arr[0])) return true;
    return someRecursive(arr.slice(1, arr.length), fun)
}