var i,j,chr;
for(i=1;i<=6;i++){
    for(var k=1; k<=(6-i); k++){
        console.log("&nbsp");
    } 
    for(j=1;j<6;j++){
        chr=chr+("*");
    }
    console.log(chr);
    chr='';
}