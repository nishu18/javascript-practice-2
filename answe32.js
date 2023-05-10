function minSquares(n)
{
    if (n <= 3)
		return n;

        let res = n;
        for(let x = 1; x <= n; x++)
	{
		let temp = x * x;
		
		if (temp > n)
			break;
		else
			res = Math.min(res,
			1 + minSquares(n - temp));
	}
	return res;
}
console.log(minSquares(13));