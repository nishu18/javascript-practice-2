function  pas(numRows){
    var pascal=[];


for (i=0; i<numRows; i++){
    pascal[i]=[];
    pascal.push(1);
       for(j=0; j<=i; j++){
           if(j==0){
               pascal[i][j]=1;
           }
           else if (i==j){
               pascal[i][j]=1;
           }
           else{
               pascal[i][j]=pascal[i-1][j-1]+pascal[i-1][j];
           }
       }
       
}
return pascal;
}
console.log(pas(5));
