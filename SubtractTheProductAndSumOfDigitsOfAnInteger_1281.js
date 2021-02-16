// Given an integer number n, return the difference between the product of its digit and the sum of its digits.

function subtractProductAndSum(n){
    let newStr = n.toString();
    let product = 1;
    let sum = 0;
    for(let i of newStr){
        product *= parseInt(i);
    }
    for(let i of newStr){
        sum += parseInt(i)
    }
    return product - sum;
}

console.log(subtractProductAndSum(234));