// Balanced strings are those that have an equali quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced string.

function balancedStringSplit(s){
    let counter = 0
    let res = 0
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            counter++
        } else {
            counter--
        }
        
        if(counter === 0) {
            res++
        }
    }
    return res;
}

console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("RLLLLRRRLR"))
console.log(balancedStringSplit("LLLLRRRR"))
console.log(balancedStringSplit("RLRRRLLRLL"))