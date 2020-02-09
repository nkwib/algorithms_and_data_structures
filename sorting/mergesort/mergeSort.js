function merge(arr1, arr2) {
    let i1 = 0;
    let i2 = 0;
    let sortedArr = [];
    while(i1 < arr1.length || i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            sortedArr.push(arr1[i1]);
            i1++;
        } else {
            sortedArr.push(arr2[i2]);
            i2++;
        }
    }
    while(i1<arr1.length) {
        sortedArr.push(arr1[i1]);
        i1++;
    };
    while(i2<arr2.length) {
        sortedArr.push(arr2[i2]);
        i2++;
    };
    return sortedArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,10,50,2,14,99,100]));