// var x=3;
// if (x%2==0){
//     console.log(`${x} is a even number`)

// }else {
//     console.log(`${x} is a odd number`)}


//     for(var input=1; input<10; input++){
//         console.log(input)
//     }

// var table=10;
// for(var i=1; i<=10; i++){
//     console.log(i+"x"+table+"="+i*table);
// }


//while loop

// const readLine=require('readLine-sync');

// let evenNums=0;
// let oddNums=0;

// while(true){
//     let n=readLine.questionInt("Enter a number:")
//     if(n==-1){
//         break;
//     }
//     if (n%2==1){
//         oddNums++;
//     }else{
//         evenNums++
//     }
//     console.log(`oddNums: ${oddNums}, evenNums: ${evenNums}`);
// }
// console.log("i am finished")



//do while loop

const readLine=require('readLine-sync');
let num;
do{
    let n=readLine.questionInt("Enter a number:")
if(num<=0){
    continue;
}

    if (num % 2==0){
        console.log(`${num} is a even number`);
        
        }else {
           console.log(`${num} is a odd number`)}

} while(num!=-1)