var arr = [1,2,3];
var totalTrips = 5;
var i = 1;

while(i){
    var t=0;
    for(var item of arr){
        if(item<=i){
            t = t +  parseInt(i/item);
        }
    }
    if(t>=5){
        break;
    }
    i++;
}
console.log(i);