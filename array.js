'use strict'

let month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

function getMonth(index){
    return month[index-1];

}
console.log(`month 1: is ${(getMonth(1))}`)
console.log(`month 12: is ${(getMonth(12))}`)
console.log(`month 6: is ${(getMonth(6))}`)

let arr=new Array(1,2,3);
console.log(arr);