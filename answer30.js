function minCoin(coins,amount)
{
    let dp=Array(amount+1).fill(infinity)
    dp[0]=0;
    for(let i=0; i<coins.length; i++){
        for(let j=coins[i]; j<=amount+1; j++){
            if((dp[j-coins[i]]+1)<dp[j]){
                dp[j]=dp[j-coins[i]]+1;
            }
        }
    }
    if(dp[amount+1]==Infinity){
        return -1;
    }
    return dp[amount];
}
console.log(minCoin([1,2,5],11));