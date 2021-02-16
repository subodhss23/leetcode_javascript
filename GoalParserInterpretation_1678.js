// You own a goal parser that can interpret a string  command. The command consists of an alphabet of 'G', '()' and/or '(al)'
    //- in some order. The goal parser will interpret 'G' as the string 'G', "()" as the string "o", and "(al)" as the string 'al'.
    //- The interpreted strings are then concatenated in the original order.

    // Given the string command, return the Goal parser's interpretation of command.


    function interpret(command){
        let newString = '';
        const stackComp = '()';
        for(let i = 0; i < command.length; i++){
            let stackStr = '';
            stackStr+=command[i]+command[i+1];
            if(stackStr === stackComp){
                newString+='o'
            } 
            else{
                newString+=command[i]
            }
        }
        let result = '';
        for (let i of newString){
            if (i === ')' || i === '('){
                continue;
            }
            result+=i;
        }
        return result;
    }


    console.log(interpret("G()(al)"));
    console.log(interpret("G()()()()(al)"))
    console.log(interpret("(al)G(al)()()G"))