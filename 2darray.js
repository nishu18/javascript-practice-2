
//a = [[1,2,3],[4,5,6],[7,8,9]]
function twoArray(a,b){
    let arr=[];

for (let i=0; i<a; i++){
    for(let j=0; j<b; j++){
        arr[i]=[];
    }
}
for(let i=0;i<a;i++){
    for(let j=0; j<b; j++){
        arr[i][j]=j;
    }
}
return arr;
}

const x=[1,2,3];
const y=[4,5.6];
const z=[7,8,9];

const result=twoArray(x,y,z);
console.log(result);