// dublicate array
// let arr=[1,1,2];

//    let uniqe= [... new Set (arr)];

// console.log(uniqe);

//stock buy and sell

// var prices = [1,2,3,4,5]
// var maxProfit = function(prices) {
//     let maxprofit = 0;
//         for (let i = 1; i < prices.length; i++) {
        
//             if (prices[i] > prices[i - 1])
            
//                 maxprofit += prices[i] - prices[i - 1];
//         }
//         return maxprofit;
// };
// console.log(maxProfit);


// function rotate(arr, k) {
//     for (var i=0; i<k; i++){
//         let temp=arr[0];
//         for(var j=0; j<arr.length; j++){
//             arr[j]=arr[j-1];
//         }
//         arr[arr.length-1]=temp
//     }
//     return arr;

// };
// let arr=[1,2,3,4,5];
// k=2;

// console.log(rotate(arr, k));

// var nums1 = [4,9,9,5];
// var nums2 = [9,4,9,8,4];

// let sam=nums1.filter((curElem)=>{
//     return nums2.includes(curElem);
// })
// console.log([... new Set(sam)].reverse());

let arr='HiyTB7648GyTU';
const upper=arr.localeCompare(arr=>arr.upper().sort(''))

// arr = arr.split("").sort().join("");

console.log(upper);
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