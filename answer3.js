function integer(a,b){
    if(a>0 && b>0 && a>b){
        console.log("the large number is"+a);
    }
    else if(a>0 && b>0 && a<b){
        console.log("the large number is"+b);
    }
    else if(a===0 && a>0 && b>0){
        console.log("both  number are equal");
    }
    else{
        console.log("please add in integer");
    }
}

integer (1,2);