function numberOfArithmetic( L, N)
{

	
	if (N <= 2)
		return 0;

	
	var count = 0;

	
	var res = 0;

	for (var i = 2; i < N; ++i) {

	
		if (L[i] - L[i - 1] == L[i - 1] - L[i - 2]) {
			++count;
		}

		
		else {
			count = 0;
		}

	
		res += count;
	}

	
	return res;
}

var L = [ 1, 3, 5, 6, 7, 8 ];
	var N = L.length;
console.log(numberOfArithmetic(L, N));
