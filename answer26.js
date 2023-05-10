function findRepeating(arr, n){
    var sum=0;
    for(i=0; i<n; i++)
      sum +=arr[i];
    return sum -(((n-1)*n)/2);

}

var arr=[3,1,3,4,2];
var n=arr.length;

console.log(findRepeating (arr, n));