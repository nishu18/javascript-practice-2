var rob = function(nums) {
    let evenSum = 0, oddSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if( i % 2 == 0 ) {
            evenSum += nums[i];
            evenSum = evenSum > oddSum ? evenSum : oddSum;
        } else {
            oddSum += nums[i];
            oddSum = evenSum > oddSum ? evenSum : oddSum;
        }
    }

    return evenSum > oddSum ? evenSum : oddSum;
};
console.log(rob([2,7,9,3,1]))