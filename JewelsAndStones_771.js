// You're given string jewels representing the types of stones that are jewels, and stones representing the stones
// - you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensative, so 'a' is considered a different type of stone from 'A'.


function numJewelsInStones(jewels, stones){
    let count = 0;
    let newStones = stones.split('')
    for(let i of jewels){
        for(let s of stones){
            if ( i === s){
                count++;
            }
        }
    }
    return count;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));