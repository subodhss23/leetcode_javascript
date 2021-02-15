// Given a valid(IPv4) address, return a defanded version of that IP address.

var defangIPaddr = function(address){
    let newAdd = "";
    for (let i of address){
        if (i === '.'){
            newAdd+='[.]'
        }
        else{
            newAdd+=i;
        }
    }
    return newAdd;
}

