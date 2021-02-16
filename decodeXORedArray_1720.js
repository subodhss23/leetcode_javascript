// There ia a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that
    // - encoded[i] = arr[i] XOR arr[i+1]. For example, if arr = [1,0,2,1], then
    // - encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first , that is the 
    // - element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

function decode(encoded, first){
    let arr = [];
    arr[0] = first;
    let temp = 0;
    for(let i = 0; i < encoded.length; i++){
        temp = encoded[i] ^ arr[i];
        arr.push(temp);
    }
    return arr;
}

console.log(decode([1,2,3], 1))
console.log(decode([6,2,7,3], 4))