// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
    // Initally target array is empty.
    // From left to right read nums[i] and index[i], insert a index index[i] the value nums[i] in target array.
    // Repeat the previous step until there are no elements to read in nums and index.

// Return the target array.
// It is guaranteed that the insertion operation operation will be valid.

function  createTargetArray(nums, index){
  let target = [];

  for(let number of nums){
      let idx = index.shift();
      target.splice(idx,0,number);
  }
  return target;
}

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))