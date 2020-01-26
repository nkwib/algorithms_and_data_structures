const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
};
/*
function bubbleSort(arr) {
    for(let i = arr.length; i>0; i--) {
        for(let j = 0; j<i-1; j++) {
            if(arr[j]>arr[j+1]) swap(arr, j, j+1)
        }
    }
    return arr;
}
*/

function bubbleSort(arr) {
    let swapped;
    for(let i = arr.length; i>0; i--) {
        swapped = false;
        for(let j = 0; j<i-1; j++) {
            if(arr[j]>arr[j+1]) {
                swapped = true;
                swap(arr, j, j+1)
            }
        }
        if(!swapped) return arr;
    }
    return arr;
}

console.log(bubbleSort([2,5,1,8,2]))