// We are given a list nums of integers representing a list compressed with run-length encoding.
// consider each adjacent pari of elements [freq, val] =  [nums[2*1], nums[2*i+1]] (with i>=0).
// For each such pari, there are freq elements with value val concatenated in a sublist. Concatenate 
    //- call the sublist from left to right to generate the decompressed list.

// Return the decompressed list.

function decompressRLElist(nums){
    let newarr = [];
    for(let i = 0; i < nums.length-1; i++){
        //newarr.push(nums[i] * nums[i+1].toString());
        let val = nums[i+1];
        let freq = nums[i]
        while(freq>0){
            newarr.push(val);
            freq--;
        }
        i++;
    }
    return newarr;
}

console.log(decompressRLElist([1,2,3,4]))