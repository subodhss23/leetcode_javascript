// you are given an m x n integer grid accounts where acounts[i][j] is the amount of money
// the ith customer has in the jth bank. Return the wealth that the riches customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts){
    let sumAmount = [];
    for(let i = 0; i < accounts.length; i++){
        let sum = 0;
        for(let j of accounts[i]){
            sum+=j;
        }
        sumAmount.push(sum);
    }
    return (Math.max(...sumAmount));
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));