// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

function arrayStringsAreEqual(word1, word2){
    let str1 = word1.join('');
    let str2 = word2.join('');
    return true ? str1 === str2 : false;
}

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))