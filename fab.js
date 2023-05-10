// using loop

// 




// using recursion

// function fibonacci(num){
//     if(num<2){
//         return num;
//     }
//     else{
//         return fibonacci(num-1)+fibonacci(num-2)
//     }
// }
// let reader =require('readline-sync')
// const nTerm =reader.question("enter the number of terms: ")

// if(nTerm<=0){
//     console.log('enter positive integerof term: ');

// }
// else{
//     for (let i=0; i<nTerm; i++){
//         console.log(fibonacci(i));
//     }

// }


// //using dp



// 	function fib(n)
// 	{
		
// 		let f = new Array(n+2);
// 		let i;
		
// 		f[0] = 0;
// 		f[1] = 1;
// 		for (i = 2; i <= n; i++)
// 		{
			
// 			f[i] = f[i-1] + f[i-2];
// 		}
// 		return f[n];
// 	}
// 	let n=9;
// 	console.log(fib(n));
	
	


let fibonacciSequence = [0,1];
function fib(n)
{
  if(fibonacciSequence.length > n -1 )
  {
    return fibonacciSequence[n-1]
  }
  else 
  {
    fibonacciSequence[n-1] = fib(n-1) + fib(n-2);
    return fibonacciSequence[n-1];
  }
}


console.log(fib(10));