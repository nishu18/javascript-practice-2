// var string=prompt("please enter a string ");
// var len=string.length;
// var msg ='it is a palindrome';
// function checkPalindrome(string){
//     const len =string.length;


// for(vari=0; i<len/2;i++){
//     if(string[i] !==string[len-1-i]){
//         return 'it is not palindrome'
//     }
// }
// return 'it is a palindrome'}


let value="madam";

const revValue=() =>{
    let myRevVal=value.toString().split("").reverse().join("");
    let myStrVal=value.toString();
/////////////////
    if(myStrVal==myRevVal){
        console.log("palindrome");
    }else{
        console.log("not a palindrome");
    }
};
revValue();