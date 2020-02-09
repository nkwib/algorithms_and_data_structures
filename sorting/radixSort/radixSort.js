function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

function radixSort(nums){
  for(let k = 0; k < maxDigit(nums); k++){
      let digitBuckets = Array.from({length: 10}, () => []);
      for(let i = 0; i < nums.length; i++){
          digitBuckets[getDigit(nums[i],k)].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 354, 7654, 236, 7547, 1356, 1, 236, 5, 24, 987]));
