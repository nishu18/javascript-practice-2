var longestConsecutive = function(nums) {
    const set = new Set(nums);
     let max = 0;
     for(let num of nums){
         if(set.has(num-1)){
             continue
         } 
         
             let currNum = num;
         let currMax = 0
             while(set.has(currNum)){
                 currNum++
                 currMax++
             }
             max = Math.max(max, currMax)
 
         
     }
     return max
 };
 console.log(longestConsecutive([100,4,200,1,3,2]))

var a=10;
console.log(a);