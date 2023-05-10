const wordBreak = function (s, wordDict) {
    const wordLength = s.length;
    const dp = new Array(wordLength + 1).fill(false);
    dp[0] = true;
  
    for (let i = 0; i <= wordLength; i += 1) {
      for (let j = 0, { length } = wordDict; j < length; j += 1) {
        const previous = i - wordDict[j].length;
        if (
          previous >= 0 &&
          dp[previous] &&
          s.slice(previous, i) === wordDict[j]
        ) {
          dp[i] = true;
        }
      }
    }
  
    return dp[wordLength];
  };
  var wordDict= [ "mobile", "samsung", "sam", "sung", "man", "mango", "icecream", "and", "go", "i",
  "like", "ice", "cream" ];
  console.log(wordBreak("mobile","sam"))
