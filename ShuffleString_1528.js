// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith
    //- position moved to indices[i] in the shuffled string.
// Return the shuffled string.

// function restoreString(s, indices){
//     let newStr = '';
//     let newObj = {};
//     let i = 0;
//     while(i < indices.length){
//         //newObj[s[i]] = indices[i];
//         newObj[indices[i]] = s[i];
//         i++;
//     }
//     for(const x in newObj){
//         newStr += (newObj[x]);
//     }
//     return newStr;
// }

function restoreString(s, indices){
    let shuffled = [];
    for (let i = 0; i < indices.length; i++){
        const char = s[i];
        const indx = indices[i];

        shuffled[indx] = char;
    }
    return shuffled.join('');
}

console.log(restoreString('aiohn', [3,1,4,2,0]));
console.log(restoreString('art',[1,0,2]));