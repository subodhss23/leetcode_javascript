// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, 
    //-for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]

// Return the answer in an array.

function smallerNumberThancurrent(nums){
    let result = [];
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        counter = 0;
        let j = 0;
        while(j<nums.length){
            if(nums[j]<nums[i]){
                counter++;
            }
            j++;
        }
        result.push(counter);
    }
    return result;
}

console.log(smallerNumberThancurrent([8,1,2,2,3]));
console.log(smallerNumberThancurrent([6,5,4,8]));
console.log(smallerNumberThancurrent([7,7,7,7]))