let test = [12,15,17,21,26,28,37,42]

function binSearch(arr, start, end, x){
    if(end >= start) {
        mid = Math.floor(start + (end-start)/2);
        if(arr[mid] === x) return mid;
        return arr[mid] > x? binSearch(arr, start, mid-1, x):
            binSearch(arr, mid+1, end, x);
    }
    return -1
}

console.log(binSearch(test, 0, 7, 37))