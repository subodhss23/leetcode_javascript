// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies 
// that ith kids has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have
// - the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies){
    let maxVal = Math.max(...candies);
    let temp = 0;
    let newArr = [];
    for(let i of candies){
        if(i + extraCandies >= maxVal){
            newArr.push(true);
        } else {
            newArr.push(false);
        }
        
    }
    return newArr;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));