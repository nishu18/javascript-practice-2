//11

// let a=5;

// if(a % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

//12

// let a=5;
// let b=6;
// let c=9;
// let largest;

// if(a>=b && a>=c){
//   largest=a;

// }
// else if(b>=a && b>=c){
//     largest=b;
  
//   }
//   else{
//     largest=c;
  
//   }
//   console .log("largest number: " + largest)

//13
// var number=11;

// if(number===1){
//  console.log(  ` ${number} is a not prime and not `)
// }
// for(var i=2; i<number; i++){
//     if(number%i==0){
//         var res=` ${number}: is not prime number`;
//         break;
//     }else{
//         var res=` ${number}is  prime number`;
//     }
// }
// console.log(res);


//14

// var a=2;
// var b=15;
// var primeNum;

// for (var i=2; i<b; i++){
//     primeNum =1;
    
//     for (var j=2; j<i; j++){
//         if(i%j==0){
//             primeNum=0;
//         }

//     }
//     if(primeNum==1){
//         console.log(i);
//     }
// }

//15

// let a=5;
// var fact=1;

// for(var i=1; i<=a; i++){
    

//     fact=fact*i;
// }
// console.log(`${fact} factorial number: `)

//16
// let a=5;
// let result=1;

// for(i=1; i<11; i++){
//     result=i*a;
//     console.log(`${a}*${i}=${result}`);
// }

//17

// let num=153;
// let temp=num;
// let numberOfDigit=num.toString().length;
// let sum=0;

// while(temp>0){
//     var digit=temp%10;
//     sum +=digit**numberOfDigit;
//     temp=parseInt(temp/10)
// }
// if(sum==num){
//     console.log(`${num} is armostrong`)
// }else{
//     console.log(`${num} is not armostrong`)
// }

//18

// let arr = [];
// for(i=6;i<=100;i=i+6)
// {
// arr.push(i)
// }
// console.log(arr)


// let a=4;
// let n1=0;
// let n2=1;
// temp=n1+n2;
// console.log(n1);

// for(var i=2; i<=a; i++){
//     console.log(temp);
//     temp=n1+n2;
//     n1=n2;
//     n2=temp;

// }

//or

// function fabonacci(num){
//     if(num<2){
//         return num;
//     }else{
//         return fabonacci(num-1)+fabonacci(num-2)
//     }
// }
// const number=10;

// if(number<=0){
//     console.log("is not fabonacci series")
// }else{
//     for (var i=0; i<number; i++){
//     console.log(fabonacci(i));}
// }

//19

// let a=8;
// let b=500;



// for (let i=a; i<b; i++ ){
//     let numberOfDigit=i.toString().length;
//     let sum=0;
//     let temp=i;
//     while(temp>0){
//         let digit=temp%10;
//         sum+=digit**numberOfDigit;
//         temp=parseInt(temp/10);
//     }
//     if (sum == i) {
//         console.log(i);
//     }
// }

//20

let reader =require('readline-sync')




// let number1 =reader.question("enter first number")
// let number2 =reader.question("enter second number")
// let operater =reader.question("enter operater ")
// let result;

// if(operater=='+'){
//     result=+number1+ +number2;
// }
// else if(operater=='-'){
//     result=number1-number2;
// }
// else if(operater=='*'){
//     result=number1*number2;
// }
// else{
//     result=number1/number2;
// }
// console.log(result);


// var num=1234;
// var firstDigit=num;
// var lastDigit=num%10;

// while(firstDigit>=10){
//     firstDigit=parseInt(firstDigit/10);
// }
// console.log("First Digit :"+firstDigit+)


// var=[2000,500,200,100]




// function game(userInput){
//     if(userInput==='rock' ||  userInput==='paper' || userInput==='scissors' ){
//         return userInput;
//     }
// }
// function getChoice(){
//     let random
// }

