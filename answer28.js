var arr=[1, 2, 0, 0, 2, 1];
arr.sort((a,b)=>{
    return a-b;
})
console.log(arr);


// function printArray(arr,arr_size)
//     {
//         let i;
//         for (i = 0; i < arr_size; i++)
//         {
//             console.log(arr[i] + " ");
//         }
//         console.log("<br>");
//     }
     
//     /*Driver function to check for above functions*/
//     let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
     
//     let arr_size = arr.length;
//     sort012(arr, arr_size);
//     document.write("Array after seggregation <br>")
//     printArray(arr, arr_size);

// function noOfPermutations(a, n)
// {
//     // If there is only one element then
//     // only one permutation is available
//     if (n == 1) {
//         return 1;
//     }
  
//     // Sort the array for calculating
//     // the number of elements occurring twice
//     a.sort();
  
//     // If the maximum element is occurring
//     // twice, then the number of permutations
//     // satisfying the condition is 0
//     if (a[n - 1] == a[n - 2]) {
//         return 0;
//     }
  
//     // This variable will store the
//     // number of element occurring twice
//     let x = 0;
  
//     // Loop to check the number of elements
//     // occurring twice
//     for (let i = 0; i < n - 2; ++i) {
  
//         // Check if this element
//         // is occurring twice
//         if (a[i] == a[i + 1]) {
  
//             // If this element is occurring
//             // twice then check if this number
//             // is occurring more than twice
//             if (a[i] == a[i + 2]) {
  
//                 // If element occurring thrice
//                 // then no permutation will
//                 // satisfy the given condition
//                 return 0;
//             }
  
//             x++;
  
//             // Since we have checked the next
//             // element as well, then we can
//             // increment the loop variable
//             i++;
//         }
//     }
  
//     return pow(2, n - 2 * x - 1);
// }
 
// // Driver code
 
//     let a = [ 1, 2, 2, 3, 4 ];
//     let n = a.length;
//     let num = noOfPermutations(a, n);
//     document.write(num);