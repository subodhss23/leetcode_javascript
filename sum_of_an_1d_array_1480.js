// Given an array nums. We define a running sum of array as runningSum[i] =sum(nums[0]...nums[i])
// Return the running sum of nums

var running = function(nums){
    let result = [];
    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        temp += nums[i];
        console.log(temp);
        result.push(temp);
    }
    return result;
}

console.log(running([1,2,3,4]))