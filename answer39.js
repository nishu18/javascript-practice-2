const letterMap={
    '2':"abc",
    "3":"def",
    '4':"ghi",
    '5':'jkl',
    '6':"mno",
    '7':'pqrs',
    "8":"tuv",
    "9":"wxyz"
}

let wordcombination=function(digits){

    let output=[]
    function recursiveCall(position,currentString)
    {
        if(position===digits.length)
        output.push(currentString)
        else{
            let letters=letterMap[digits[position]]
            for(let i=0;i<letters.length;i++){
                recursiveCall(position+1,currentString+letters[i])
            }
        }
    }
    recursiveCall(0,"")
    return output;
}
console.log(wordcombination("36"));