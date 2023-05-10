// function convert(){
//     var a='100';
//     var b=parseInt(a);
//     console.log("integer value is "+b)
//     var d=parseInt("3 11 43");
    
//     console.log(`integer value is : +d`);
// }
// convert();

let a=5;
let b=6;
let temp;

temp=a;
a=b;
b=temp;

console.log(`the value of a after swaping a: ${a}`)
console.log(`the value of a after swaping b: ${b}`)


const multiply = (num1, num2)=>{
    return num1*num2;
  };
  
  let resulMultiply=multiply(4,5)
  console.log(resulMultiply)