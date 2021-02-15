// Given an array of integers nums.
// A pair(i, j) is called good if nums[i] == num[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        let head = nums[i];
        while(head){
            for(let j = 0; j < nums.length; j++){
                if(head === nums[j]){
                    count++;
                    console.log(head);
                }
                break;
            }
            head = head+1;
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
// console.log(numIdenticalPairs([1,1,1,1]));
// console.log(numIdenticalPairs([1,2,3]));