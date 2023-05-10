function sortFrequency(arr){
    let frequencyMap=new Map();
    for(let i=0; i<arr.length; i++){
        if(frequencyMap.get(arr[i])){
            let newNumber=frequencyMap.get(arr[i]);
            newNumber++;
            frequencyMap.set(arr[i], newNumber)
        }
        else{
            frequencyMap.get(arr[i])==1;
        }
    }
    return frequencyMap;
}

console.log(sortFrequency([1,1,2,2,2,3,3,2,2,1]));