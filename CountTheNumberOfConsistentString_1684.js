// you are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if
    // all characters in the string appear in the string allowed.
// Return the number of consistent string in the array words.

function countConsistentStrings(allowed, words){
    let result = [];
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        for (let j = 0; j < word.legth; j++){
            const char = word[j];
            if(!alllowed.includes(char)) break;
            else if(j=== word.length - 1 )result.push(word);
        }
    }
    return result.length;
}

console.log(countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"]))