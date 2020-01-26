function flatten(arr) {
    if (arr.length === 0) return [];
    let array = [];
    Array.isArray(arr[0]) ? array = flatten(arr[0]) : array.push(arr[0])
    return array.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, [2, [3, 4], [[5]]]]))