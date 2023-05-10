//21
// function sum(num){
//     if(num>0){
//         return num+ sum(num-1);
//     }else{
//         return num;
//     }
// }
// var res=sum(5);
// console.log(res);

//22

// let reader =require('readline-sync')



// let a =reader.question("first number")

// let b =reader.question("second number")

// let c =reader.question("third number")

// let res1=a%10;
// let res2=b%10;
// let res3=c%10;

// if(res1===res2 && res1===res3){
//     console.log(`${a},${b},${c} is a last number same`)
// }else{
//     console.log(`${a},${b},${c} is a not last number same`)
// }

//25
// let a=12;

// for(var i=1; i<a; i++){
//     if(a%i==0){
//         console.log(i);

//     }
// }


//26

// function sum(num){
//     if(num>0){
//     return num + sum(num-1);}
//     else{
//         return num;
//     }
// }
// console.log(sum(5));

//27

// var x=Math.random();
// console.log("before random"+x);
// x=x*(10-1)+1;
// console.log("after random"+x);
// console.log("before random"+Math.floor(x));

//28
// const num=8;
// let a=0;
// let b=1;
// let c=a+b;
// console.log(a);

// while(c<num){
//     console.log(c);
//     c=a+b;
//     a=b;
//     b=c;
// }

//or
// function fabonacci(num){
//     if(num<2){
//         return num
//     }else{
//         return fabonacci (num-1)+ fabonacci(num-2);
//     }
// }

// const nTerm=8;
// if(nTerm<=0){
//     console.log("positive number")
// }else{
//     for(var i=0; i<nTerm; i++){
//         console.log(fabonacci(i))
//     }
// }

//30


// function factorial (x){
// if(x==0){
//     return 1;
// }else{
//     return x* factorial(x-1)
// }}
// const num=5;

// if(num>=0){
//     const result=factorial(num)
//     console.log(`factorial ${num} is ${result}`)
// }else{
//     console.log("positive number")
// }

// var a = "HYKj758Htu";
// var arr = [];
// for(var i = 0; i<a.length;i++){
//     arr.push(a[i].charCodeAt(0));
// }
// arr.sort(function(a,b){
//     return a-b;
// });
// var s = "";
// for(var i = 0; i<arr.length;i++){
//     s = s + String.fromCharCode(arr[i]);
// }
// console.log(s);
// let array = " JG67386hgfYYdg57";
// // array=array.split('').sort().reverse().join('');
// // console.log(array)


// var arr = [];

// for(var i=0;i<array.length;i++){
//     arr.push(array[i].charCodeAt(0));
// }
// arr.sort(function(a,b){
//     return a-b;
// })
// let capital = "";
// let small = "";
// let number = "";
// for(var i=0;i<arr.length;i++){
    
//     if(arr[i]>=48 && arr[i]<=57){
//         number = number+String.fromCharCode(arr[i]);
//     } else if(arr[i]>=65 && arr[i]<=90){
//         capital = capital+String.fromCharCode(arr[i]);
//     } else{
//         small = small+String.fromCharCode(arr[i]);
//     }
// }

// console.log(capital+small+number);
let array = "JG67386hgfYYdg57";
// let array = " JG67386hgfYYdg57";
// array=array.split('').sort().reverse().join('');
// var arr = [];
// capital = "";
// small = "";
// number = "";
// for(var i=0;i<array.length;i++){
//     arr.push(array[i].charCodeAt(0));
// }


// for(var i=0;i<arr.length;i++){
//     if(arr[i]>=48 && arr[i]<=57){
//         number = number+String.fromCharCode(arr[i]);
//     } else if(arr[i]>=65 && arr[i]<=90){
//         capital = capital+String.fromCharCode(arr[i]);
//     } else{
//         small = small+String.fromCharCode(arr[i]);
//     }
// }

// console.log(capital+small+number);

// var a=[3,6,2,6,8,1];
// var b=[];
// b.push(a[0]);
// for(var i=1;i<a.length;i++){
//     b.push(b[i-1]+a[i]);
// }
// console.log(b);
let arr = 'JG67386hgfYYdg57';
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  let numbers = 'JG67386hgfYYdg57';
  bubbleSort(numbers);
  console.log(numbers);
